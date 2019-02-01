import "./FileApp.scss";

import * as React from "react";
import Sidebar from "./Sidebar";
import FileList from "./FileList";
import { fileStore } from "../../store/FileStore";
import Breadcrumbs from "../../core/Breadcrumbs";
import InputField, { InputStyle } from "../../core/InputField";
import { RouteComponentProps } from "react-router";
import { observer } from "mobx-react";
import { observable } from "mobx";
import paths from "src/paths";
import { Log } from "src/Log";

interface RouterParams {
	type?: string;
	"0"?: string;
}

interface Props extends RouteComponentProps<RouterParams> {
}

const log = new Log('FileApp');

@observer
class FileApp extends React.Component<Props, object> {
	@observable private searchValue: string;

	public render() {
		log.debug('match, location', this.props.match, this.props.location);
		
		const type = this.props.match.params.type ? this.props.match.params.type : "d";
		const loc = `Home/${this.props.match.params["0"] ? this.props.match.params["0"] : ""}`;

		// Split by slashes, remove all null elements, replace 0th element with "Home",
		// recusively build all other parts
		const breadcrumbs = loc.split("/").filter((part) => !!part).map((part, idx, parts) =>
			idx === 0
			? { name: "Home", href: `${paths.APPS.FILES}/${type}`}
			: { name: part, href: `${paths.APPS.FILES}/${type}${this.breadcrumbsParts(parts.slice(1, idx + 1))}` },
		);

		const currentPath = this.props.match.params["0"] || "/";

		return (
			<div className="file-app">
				<Sidebar base={paths.APPS.FILES} />
				<div className="files">
					<div className="files-header">
						<Breadcrumbs parts={breadcrumbs} />
						<InputField type="text" style={InputStyle.Dark} value={this.searchValue} onChange={this.onSearchChanged}/>
					</div>
					<FileList base={paths.APPS.FILES + "/" + type} fileStore={fileStore} currentPath={currentPath} />
				</div>
			</div>
		);
	}

	private onSearchChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.searchValue = event.target.value;
	}

	private breadcrumbsParts = (parts: string[]): string =>
		parts.length <= 0 ? "" : "/" + parts[0] + this.breadcrumbsParts(parts.slice(1))
}

export default FileApp;
