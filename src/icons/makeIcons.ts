import { readdir, mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import del from "del";
import xml2js from "xml2js";
import { camelCase } from "camel-case";
import { format } from "prettier";

const inputSVGFolder = "src/icons/raw/";
const outputFolder = "src/icons/gen/";
const iconIndexFile = "src/icons/index.ts";

const propsToFilterOut = /^(id|class|xmlns)$/;
const nodesToFilterOut = /^(title|defs|desc)$/;

function replaceColors(key: string, value: string) {
	if (["stroke", "fill"].includes(key)) {
		if (value !== "none") {
			return "currentColor";
		}
		return value;
	}
	return value;
}

function getNodeAttributes(node: any) {
	return node.$
		? Object.keys(node.$)
				.filter((key) => !propsToFilterOut.test(key))
				.map(
					(attrKey) =>
						`${camelCase(attrKey)}='${replaceColors(attrKey, node.$[attrKey])}'`
				)
		: undefined;
}

function parseNode(node: any) {
	if (node && !nodesToFilterOut.test(node["#name"])) {
		const attributes = getNodeAttributes(node);
		const children: any[] = [];
		(node.$$ || []).forEach((child: any) => children.push(parseNode(child)));
		return node.$$
			? `<${node["#name"]}${
					attributes ? ` ${attributes.join(" ")}` : ""
			  }>${children.join("")}</${node["#name"]}>`
			: `<${node["#name"]}${attributes ? ` ${attributes.join(" ")}` : ""} />`;
	}
	return undefined;
}

async function parseRawIcon(rawIcon: string) {
	const iconXML = await xml2js.parseStringPromise(rawIcon, {
		normalize: true,
		normalizeTags: true,
		explicitArray: true,
		explicitChildren: true,
		preserveChildrenOrder: true,
	});
	const svgElement = iconXML.svg;
	let children = iconXML.svg.$$ || [];
	children = children.map((child: any) => parseNode(child));
	const parsedProps = getNodeAttributes(svgElement);

	return {
		parsedProps,
		children,
	};
}

async function createReactIcon(name: string, rawIcon: string) {
	const { parsedProps, children } = await parseRawIcon(rawIcon);
	return `import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function ${name}(props: StyledIconProps) {
  return (
    <StyledIcon ${parsedProps?.join(" ")} {...props}>
      ${children.join("")}
    </StyledIcon>
  )
}`;
}

function createIconIndex(iconNames: string[]) {
	const imports = iconNames
		.map((icon) => `import { ${icon} } from "./gen/${icon}"; \n`)
		.join("");
	const exports = `export {
${iconNames.join(",\n")}
}`;
	return imports + "\n" + exports;
}

async function cleanOutputFolder() {
	console.log("ℹ️  Removing old output files");
	await del([outputFolder]);
	await mkdir(outputFolder);
}

function isValidIconFile(name: string) {
	// Silently skip non-SVG files
	if (!/\.svg$/.test(name)) return false;
	// Issue an error message if the file is an SVG icon but has an invalid name
	if (name.includes("-")) {
		console.error("❌ Icon names cannot contain hyphens:", name);
		return false;
	}
	return true;
}

async function main() {
	await cleanOutputFolder();
	const iconFiles = await readdir(inputSVGFolder);
	const processedIcons: string[] = [];
	for (const iconFile of iconFiles) {
		if (!isValidIconFile(iconFile)) continue;
		const fullIconFilePath = path.join(inputSVGFolder, iconFile);
		const iconName = iconFile.replace(".svg", "");
		processedIcons.push(iconName);
		const content = await readFile(fullIconFilePath, "utf8");
		const reactIcon = await createReactIcon(iconName, content);
		const destinationFile = path.resolve(outputFolder, `${iconName}.tsx`);
		await writeFile(
			destinationFile,
			format(reactIcon, { parser: "typescript" })
		);
		console.log(`✅ Created ${destinationFile}`);
	}

	await writeFile(
		iconIndexFile,
		format(createIconIndex(processedIcons), { parser: "typescript" })
	);
	console.log("✅ Created icon index");
}

main().then().catch(console.error);
// vim: ts=2:sw=2
