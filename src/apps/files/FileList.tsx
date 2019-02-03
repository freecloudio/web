import './FileList.scss';

import * as React from 'react';
import { FileStore } from 'src/store/FileStore';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import FileTableBody from './FileTableBody';
import { PathInfo } from 'src/api';
import { Log } from 'src/Log';

interface Props {
	base: string;
	fileStore: FileStore;
	currentPath: string;
}

@observer
class FileList extends React.Component<Props, object> {

	private readonly log = new Log('FileList');
	@observable private listScrolled: boolean = false;
	@observable private currentDir: PathInfo = {};

	constructor(props: Props) {
		super(props);
		this.onTableScrolled = this.onTableScrolled.bind(this);
	}

	public async componentDidMount() {
		this.currentDir = await this.props.fileStore.getPathInfo(this.props.currentPath);
	}

	public async componentDidUpdate(prevProps: Props) {
		if (prevProps.currentPath !== this.props.currentPath) {
			this.log.debug('Updating file list');
			this.currentDir = await this.props.fileStore.getPathInfo(this.props.currentPath);
		}
	}

	public render() {
		return (
			<div className="file-list">
				<div className={`file-table-shadow-shim${this.listScrolled ? ' scrolled' : ''}`} />
				<div className="file-table-wrapper" onScroll={this.onTableScrolled}>
					{
						this.currentDir && this.currentDir.content ?
							<table className="file-table">
								<thead>
									<tr>
										<th>Name<span>Name</span></th>
										<th>Owner<span>Owner</span></th>
										<th>Size<span>Size</span></th>
									</tr>
								</thead>
								<FileTableBody base={this.props.base} files={this.currentDir.content} />
							</table>
							:
							<span>No files yet</span>
					}
				</div>
			</div>
		);
	}

	private onTableScrolled(event: React.UIEvent): void {
		if (!event.nativeEvent.srcElement) {
			return;
		}
		if (event.nativeEvent.srcElement.scrollTop > 0) {
			this.listScrolled = true;
		} else {
			this.listScrolled = false;
		}
	}
}

export default FileList;
