import * as React from 'react';

import './Sidebar.scss';
import Icon, { IconStyle } from '../../core/Icon';
import { NavLink, match } from 'react-router-dom';
import Button from '../../core/Button';
import Popover from '../../core/Popover';
import PopoverContainer from '../../core/PopoverContainer';
import paths from 'src/paths';
import { Location } from 'history';

interface Props {
	// Called when a new folder is to be created
	onCreateFolder: () => void;
}

function homeLinkIsActive(_: match, l: Location): boolean {
	return (l && (l.pathname === paths.APPS.FILES || l.pathname.includes(paths.APPS.FILES + '/d')));
}

function sharedLinkIsActive(_: match, l: Location): boolean {
	return (l && l.pathname.includes(paths.APPS.FILES + '/shared'));
}

function starredLinkIsActive(_: match, l: Location): boolean {
	return (l && l.pathname.includes(paths.APPS.FILES + '/starred'));
}

function trashLinkIsActive(_: match, l: Location): boolean {
	return (l && l.pathname.includes(paths.APPS.FILES + '/trash'));
}

const Sidebar: React.FunctionComponent<Props> = ({ onCreateFolder }) => {
	const [addDropdownVisible, setAddDropdownVisible] = React.useState(false);

	return (
		<aside className="files-sidebar">
			<h1>Files</h1>
			<nav>
				<ul>
					<li>
						<PopoverContainer
							popover={
								<Popover visible={addDropdownVisible} onClick={() => setAddDropdownVisible(false)} anchor="below">
									<ul>
										<li>
											<span>Upload files</span>
										</li>
										<li>
											<span onClick={onCreateFolder}>Create folder</span>
										</li>
									</ul>
								</Popover>
							}
						>
							<Button className="add-button" onClick={() => setAddDropdownVisible(true)} style="primary-inverted">
								<Icon name="plus" size={1.5} />New
								</Button>

						</PopoverContainer>
					</li>
					<li>
						<NavLink to={{ pathname: paths.APPS.FILES }} isActive={homeLinkIsActive}>
							<Icon name="homeOutline" size={1.5} color={IconStyle.Dark} />Your files
							</NavLink>
					</li>
					<li>
						<NavLink to={{ pathname: paths.APPS.FILES + '/shared' }} isActive={sharedLinkIsActive}>
							<Icon name="shareVariant" size={1.5} color={IconStyle.Dark} />Shared
							</NavLink>
					</li>
					<li>
						<NavLink to={{ pathname: paths.APPS.FILES + '/starred' }} isActive={starredLinkIsActive}>
							<Icon name="starOutline" size={1.5} color={IconStyle.Dark} />Starred
							</NavLink>
					</li>
					<li>
						<NavLink to={{ pathname: paths.APPS.FILES + '/trash' }} isActive={trashLinkIsActive}>
							<Icon name="deleteOutline" size={1.5} color={IconStyle.Dark} />Trash
							</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
