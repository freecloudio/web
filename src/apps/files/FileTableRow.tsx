import { observer } from "mobx-react";
import * as React from "react";
import Icon, { IconStyle } from "../../core/Icon";
import { RouteComponentProps } from "react-router";
import { FileInfo } from "src/api";
import { Log } from "src/Log";
import { observable } from "mobx";

interface Props extends RouteComponentProps {
	base: string;
	file: FileInfo;
}

const log = new Log("FileTableRow");

@observer
class FileTableRow extends React.Component<Props, object> {
	@observable private isDraggedOver = false;

	public render() {
		const { file } = this.props;
		return (
			<tr onDrop={this.onDrop} onDragOver={this.onDragOver} onDragLeaveCapture={this.onDragLeave} className={this.isDraggedOver ? "dropzone" : ""}>
				<td>
					<div className="cell-wrapper" onDoubleClick={this.onDoubleClick}>
						<Icon name={(file.isDir) ? "folderOutline" : "fileOutline"} size={1.5} color={IconStyle.Dark} className="icon" />
						<span>{file.name}</span>
					</div>
				</td>
				<td><div className="cell-wrapper">{file.ownerID ? file.ownerID : "..."}</div></td>
				<td><div className="cell-wrapper">{file.size}</div></td>

			</tr>
		);
	}

	private onDoubleClick = () => {
		this.props.history.push(this.props.base + this.props.file.path + this.props.file.name);
	}

	private onDrop = (event: React.DragEvent) => {
		event.preventDefault();
		const files = Array.from(event.dataTransfer.files);
		log.debug("Files", files.map((f: File) => f.name), "dropped to folder", `${this.props.file.path}${this.props.file.name}`);
	}

	private onDragOver = (event: React.DragEvent) => {
		event.preventDefault();
		this.isDraggedOver = true;
	}

	private onDragLeave = (event: React.DragEvent) => {
		event.preventDefault();
		this.isDraggedOver = false;
	}
}

export default FileTableRow;
