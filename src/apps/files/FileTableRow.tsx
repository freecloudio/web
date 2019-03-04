import * as React from 'react';
import Icon, { IconStyle } from '../../core/Icon';
import { RouteComponentProps } from 'react-router';
import { FileInfo } from 'src/api';
import { Log } from 'src/Log';
import * as classNames from 'classnames';
import paths from 'src/paths';
import UserNameByID from 'src/core/UserNameByID';

interface Props extends RouteComponentProps {
	base: string;
	file: FileInfo;
}

const log = new Log('FileTableRow');

const FileTableRow: React.FunctionComponent<Props> = ({ file, history }) => {

	const [ isDraggedOver, setIsDraggedOver ] = React.useState(false);

	const onDoubleClick = () => {
		history.push(paths.APPS.FILES + file.path + file.name);
	};

	const onDrop = (event: React.DragEvent) => {
		event.preventDefault();
		const files = Array.from(event.dataTransfer.files);
		log.debug('Files', files.map((f: File) => f.name), 'dropped to folder', `${file.path}${file.name}`);
	};

	const onDragOver = (event: React.DragEvent) => {
		event.preventDefault();
		setIsDraggedOver(true);
	};

	const onDragLeave = (event: React.DragEvent) => {
		event.preventDefault();
		setIsDraggedOver(true);
	};

	return (
		<tr onDrop={onDrop} onDragOver={onDragOver} onDragLeaveCapture={onDragLeave} className={classNames({dropzone: isDraggedOver})}>
			<td>
				<div className="cell-wrapper" onDoubleClick={onDoubleClick}>
					<Icon name={(file.isDir) ? 'folderOutline' : 'fileOutline'} size={1.5} color={IconStyle.Dark} className="icon" />
					<span>{file.name}</span>
				</div>
			</td>
			<td><div className="cell-wrapper"><UserNameByID id={file.ownerID!} /></div></td>
			<td><div className="cell-wrapper">{file.size || '-'}</div></td>

		</tr>
	);
};

export default FileTableRow;
