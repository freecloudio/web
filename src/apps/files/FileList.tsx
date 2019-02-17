import './FileList.scss';

import * as React from 'react';
import classNames from 'classnames';
import FileTableBody from './FileTableBody';
import { Log } from 'src/Log';
import { connect } from 'react-redux';
import { Store } from 'src/store';
import { FileState } from 'src/store/fileStore';
import paths from 'src/paths';
import * as fileActions from 'src/actions/fileActions';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'src/actions';

interface Props {
	currentPath: string;
	files: FileState;
	getPathInfo: typeof fileActions.getPathInfo;
}

const log = new Log('FileList');

const FileList: React.FunctionComponent<Props> = ({currentPath, files, getPathInfo}) => {
	
	const [ listScrolled, setListScrolled ] = React.useState(false);

	function onTableScrolled(event: React.UIEvent): void {
		if (!event.nativeEvent.srcElement) {
			return;
		}
		if (event.nativeEvent.srcElement.scrollTop > 0) {
			setListScrolled(true);
		} else {
			setListScrolled(false);
		}
	}

	// TODO: Improve the whole loading setup

	if (!files.files[currentPath]) {
		log.debug('Loading info for path', currentPath);
		getPathInfo(currentPath);
		return (<div className="file-list">Loading...</div>);
	}

	return (
		<div className="file-list">
			<div className={classNames('file-table-shadow-shim', { scrolled: listScrolled })} />
			<div className="file-table-wrapper" onScroll={onTableScrolled}>
				{
					files.files[currentPath] && files.files[currentPath].content ?
						<table className="file-table">
							<thead>
								<tr>
									<th>Name<span>Name</span></th>
									<th>Owner<span>Owner</span></th>
									<th>Size<span>Size</span></th>
								</tr>
							</thead>
							<FileTableBody base={paths.APPS.FILES} files={files.files[currentPath].content!} />
						</table>
						:
						<span>No files yet</span>
				}
			</div>
		</div>
	);
};

function mapStateToProps(state: Store) {
	return {
		files: state.files,
	};
}

function mapDispatchToProps(dispatch: ThunkDispatch<Store, null, Action>) {
	return {
		getPathInfo: (path: string) => dispatch(fileActions.getPathInfo(path)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList);
