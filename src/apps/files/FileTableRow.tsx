import { observer } from "mobx-react";
import * as React from "react";
import { File, Directory } from "../../models/File";
import Icon, { IconStyle } from "../../core/Icon";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {
	base: string;
	file: File | Directory;
}

@observer
class FileTableRow extends React.Component<Props, object> {
	public render() {
		const { file } = this.props;
		return (
			<tr>
				<td>
					<div className="cell-wrapper" onDoubleClick={this.onDoubleClick}>
						<Icon name={("children" in file) ? "folderOutline" : "fileOutline"} size={1.5} color={IconStyle.Dark} className="icon" />
						<span>{file.name}</span>
					</div>
				</td>
				<td><div className="cell-wrapper">{file.ownerName ? file.ownerName : "..."}</div></td>
				<td><div className="cell-wrapper">{file.size}</div></td>

			</tr>
		);
	}

	private onDoubleClick = () => {
		this.props.history.push(this.props.base + this.props.file.path + this.props.file.name);
	}
}

export default FileTableRow;
