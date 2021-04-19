import { useHistory } from "react-router";
import styled from "styled-components";
import Avatar from "../../../components/Avatar";
import { DocumentOutline, FolderOutline } from "../../../icons";
import apps from "../../../appindex";
import { PointerEvent } from "react";
import usePath from "../hooks/usePath";

export interface Props {
	type: "directory" | "file";
	name: string;
	size: number;
	sharedWith?: string[];
	starred: boolean;
	lastModified?: Date;
}

function iconForType(type: Props["type"]) {
	if (type === "directory") {
		return <FolderOutline size="lg" />;
	}
	return <DocumentOutline size="lg" />;
}

// TODO: display: contents is not widely supported yet. Search for polyfills
const StyledRow = styled.div`
	display: contents;

	:hover > * {
		background: var(--color-background-alt);
		border-bottom: 3px solid var(--color-filetable-fake-shadow);
	}
`;

const StyledTd = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	border-bottom: 3px solid var(--color-background);
	transition: all 0.1s ease;
	box-sizing: border-box;
`;

const StyledColumnWithPadding = styled(StyledTd)`
	padding-left: 1rem;
`;

const IconTd = styled(StyledTd)`
	justify-content: center;
	border-radius: var(--rounded-md) 0 0 var(--rounded-md);
`;

const LastColumn = styled(StyledColumnWithPadding)`
	border-radius: 0 var(--rounded-md) var(--rounded-md) 0;
	display: flex;
	justify-content: flex-end;
	padding-right: 1.5rem;
`;

function lastModifiedAt(date: Date): string {
	return `${date.getDay()}.${date.getMonth() + 1}.`;
}

function buildPath(type: Props["type"], currentPath: string, fileName: string) {
	const prefix = `${apps.files.routePrefix}/${
		type === "directory" ? "d" : "f"
	}`;
	if (currentPath === "/") {
		return `${prefix}${currentPath}${fileName}`;
	}
	return `${prefix}${currentPath}/${fileName}`;
}

const FileRow = ({
	type,
	name,
	size,
	sharedWith,
	starred,
	lastModified,
}: Props) => {
	const history = useHistory();
	const { path: currentPath } = usePath();

	const navigateTo = (fileName: string, type: Props["type"]) => (
		event: PointerEvent<HTMLDivElement>
	) => {
		event.preventDefault();
		history.push(buildPath(type, currentPath, fileName));
	};
	return (
		<StyledRow onDoubleClick={navigateTo(name, type)}>
			<IconTd>{iconForType(type)}</IconTd>
			<StyledTd>{name}</StyledTd>
			<StyledColumnWithPadding>
				{sharedWith?.length
					? sharedWith.map((username) => (
							<Avatar key={username} small name={username} />
					  ))
					: null}
			</StyledColumnWithPadding>
			<StyledColumnWithPadding>{size} B</StyledColumnWithPadding>
			<LastColumn>
				{lastModified ? lastModifiedAt(lastModified) : "-"}
			</LastColumn>
		</StyledRow>
	);
};

export default FileRow;
