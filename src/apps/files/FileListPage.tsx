import * as React from 'react';
import Dialog, { DialogAction } from 'src/core/Dialog';
import TextInput, { InputStyle } from 'src/core/TextInput';
import Breadcrumbs from 'src/core/Breadcrumbs';
import FileList from 'src/apps/files/FileList';
import paths from 'src/paths';
import { type } from 'os';
import { RouteComponentProps } from 'react-router';
import { Log } from 'src/Log';
import { connect } from 'react-redux';
import { Store } from 'src/store';
import { Dispatch } from 'redux';

import * as fileActions from 'src/actions/fileActions';

interface RouteProps {
	'0'?: string;
	type?: string;
}

const log = new Log('FileListPage');

interface Props extends RouteComponentProps<RouteProps> {
	dialogIsOpen: boolean;
	setDialogOpen: typeof fileActions.changeDialogState;
}

const DIALOG_ACTION_CANCEL: DialogAction = { name: 'cancel', text: 'Cancel' };
const DIALOG_ACTION_CREATE: DialogAction = { name: 'create', text: 'Create Folder', type: 'primary' };

function breadcrumbsParts(parts: string[]): string {
	return parts.length <= 0 ? '' : '/' + parts[0] + breadcrumbsParts(parts.slice(1));
}

const FileListPage: React.FunctionComponent<Props> = ({ match, dialogIsOpen, setDialogOpen }) => {
	const [searchValue, setSearchValue] = React.useState('');
	const [newFolderName, setNewFolderName] = React.useState('New folder');

	// const locationType = match.params.type || 'd';
	const location = match.params['0'] || '/';

	function dialogActionTriggered(actionName: string) {
		switch (actionName) {
			case DIALOG_ACTION_CREATE.name:
				log.debug('Creating new folder with name', newFolderName);
				setDialogOpen(false);
				break;
			case DIALOG_ACTION_CANCEL.name:
				setDialogOpen(false);
				break;
			default:
				log.error(`Dialog triggered action '${actionName}', which is unknown`);
		}
	}

	const loc = `Home${location}`;

	// Split by slashes, remove all null elements, replace 0th element with "Home",
	// recusively build all other parts
	const breadcrumbs = loc.split('/').filter((part) => !!part).map((part, idx, parts) =>
		idx === 0
			? { name: 'Home', href: `${paths.APPS.FILES}/${type}` }
			: { name: part, href: `${paths.APPS.FILES}/${type}${breadcrumbsParts(parts.slice(1, idx + 1))}` },
	);

	return (
		<div className="filepage">
			<Dialog
				actions={[ DIALOG_ACTION_CANCEL, DIALOG_ACTION_CREATE ]}
				onActionTriggered={dialogActionTriggered}
				open={dialogIsOpen}
			>
				<span>Enter a name for the new folder:</span>
				<TextInput
					type="text"
					value={newFolderName}
					onChange={setNewFolderName}
				/>
			</Dialog>
			<div className="files">
				<div className="files-header">
					<Breadcrumbs parts={breadcrumbs} />
					<TextInput
						type="text"
						style={InputStyle.Dark}
						value={searchValue}
						onChange={setSearchValue}
					/>
				</div>
				<FileList currentPath={location} />
			</div>

		</div>
	);
};

function mapStateToProps(state: Store) {
	return {
		dialogIsOpen: state.files.appState.dialogOpen,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		setDialogOpen: (open: boolean) => dispatch(fileActions.changeDialogState(open)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FileListPage);
