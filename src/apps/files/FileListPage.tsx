import * as React from 'react';
import Dialog from 'src/core/Dialog';
import TextInput, { InputStyle } from 'src/core/TextInput';
import Breadcrumbs from 'src/core/Breadcrumbs';
import FileList from 'src/apps/files/FileList';
import paths from 'src/paths';
import { type } from 'os';
import { RouteComponentProps } from 'react-router';
import { Log } from 'src/Log';

interface RouteProps {
	'0'?: string;
	type?: string;
}

const log = new Log('FileListPage');

interface Props extends RouteComponentProps<RouteProps> {
	isCreatingNewFolder: boolean;
}

function breadcrumbsParts(parts: string[]): string {
	return parts.length <= 0 ? '' : '/' + parts[0] + breadcrumbsParts(parts.slice(1));
}

const FileListPage: React.FunctionComponent<Props> = ({ match, isCreatingNewFolder }) => {
	console.log(isCreatingNewFolder);

	const [searchValue, setSearchValue] = React.useState('');
	const [newFolderName, setNewFolderName] = React.useState('New folder');

	// const locationType = match.params.type || 'd';
	const location = match.params['0'] || '/';

	function dialogActionTriggered(actionName: string) {
		switch (actionName) {
			case 'create':
				log.debug('Creating new folder with name', newFolderName);
				break;
			case 'close':
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
				actions={[{ name: 'cancel', text: 'Cancel' }, { name: 'create', text: 'Create Folder', type: 'primary' }]}
				onActionTriggered={dialogActionTriggered}
				open={isCreatingNewFolder}
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

export default FileListPage;
