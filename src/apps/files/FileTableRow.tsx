import { observer } from "mobx-react";
import * as React from "react";
import Icon, { IconStyle } from "../../core/Icon";
import { RouteComponentProps } from "react-router";
import { FileInfo } from "src/api";

interface Props extends RouteComponentProps {
	base: string;
	file: FileInfo;
}

@observer
class FileTableRow extends React.Component<Props, object> {
	public render() {
		const { file } = this.props;
		return (
			<tr>
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
}

export default FileTableRow;
