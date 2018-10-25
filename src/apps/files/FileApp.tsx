import "./FileApp.scss";

import * as React from "react";
import Sidebar from "./Sidebar";
import FileList from "./FileList";
import { fileStore } from "../../store/FileStore";
import Breadcrumbs from "../../core/Breadcrumbs";
import InputField, { InputStyle } from "../../core/InputField";
import { RouteComponentProps } from "react-router";

interface RouterParams {
	type?: string;
	"0"?: string;
}

interface Props extends RouteComponentProps<RouterParams> {
}

class FileApp extends React.Component<Props, object> {

	public render() {
		// TODO: Make this more dynamic
		const base = "/apps/files";

		const type = this.props.match.params.type ? this.props.match.params.type : "d";
		const loc = `Home/${this.props.match.params["0"] ? this.props.match.params["0"] : ""}`;

		// Split by slashes, remove all null elements, replace 0th element with "Home",
		// recusively build all other parts
		const breadcrumbs = loc.split("/").filter((part) => !!part).map((part, idx, parts) =>
			idx === 0
			? { name: "Home", href: `${base}/${type}`}
			: { name: part, href: `${base}/${type}${this.breadcrumbsParts(parts.slice(1, idx + 1))}` },
		);

		return (
			<div className="file-app">
				<Sidebar base={base} />
				<div className="files">
					<div className="files-header">
						<Breadcrumbs parts={breadcrumbs} />
						<InputField type="text" style={InputStyle.Dark} />
					</div>
					<FileList base={base + "/" + type} fileStore={fileStore} currentPath="/" />
				</div>
			</div>
		);
	}

	private breadcrumbsParts = (parts: string[]): string =>
		parts.length <= 0 ? "" : "/" + parts[0] + this.breadcrumbsParts(parts.slice(1))
}

export default FileApp;
