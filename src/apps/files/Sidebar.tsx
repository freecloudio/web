import * as React from 'react';

import './Sidebar.scss';
import Icon, { IconStyle } from '../../core/Icon';
import { NavLink, match } from 'react-router-dom';
import { Log } from '../../Log';
import Button, { ButtonStyle } from '../../core/Button';
import Popover from '../../core/Popover';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import PopoverContainer from '../../core/PopoverContainer';
import paths from 'src/paths';
import { Location } from 'history';

interface Props {
	// base path of the files app. This is used to generate sub-links like for shared files and trash.
	base: string;
}

const log = new Log('Sidebar');

@observer
class Sidebar extends React.Component<Props, object> {

	@observable private addDropdownVisible = false;

	public render() {
		const { base } = this.props;
		return (
			<aside className="files-sidebar">
				<h1>Files</h1>
				<nav>
					<ul>
						<li>
							<PopoverContainer
								popover={
									<Popover visible={this.addDropdownVisible} onClick={this.onAddButtonClicked} anchor="below">
										<ul>
											<li>
												<span>Upload files</span>
											</li>
											<li>
												<span>Create folder</span>
											</li>
										</ul>
									</Popover>
								}
							>
								<Button className="add-button" onClick={this.onAddButtonClicked} style={ButtonStyle.PrimaryInverted}>
									<Icon name="plus" size={1.5} />New
								</Button>

							</PopoverContainer>
						</li>
						<li>
							<NavLink to={{ pathname: base }} isActive={this.homeLinkIsActive}>
								<Icon name="homeOutline" size={1.5} color={IconStyle.Dark} />Your files
							</NavLink>
						</li>
						<li>
							<NavLink to={{ pathname: base + '/shared' }} isActive={this.sharedLinkIsActive}>
								<Icon name="shareVariant" size={1.5} color={IconStyle.Dark} />Shared
							</NavLink>
						</li>
						<li>
							<NavLink to={{ pathname: base + '/starred' }} isActive={this.starredLinkIsActive}>
								<Icon name="starOutline" size={1.5} color={IconStyle.Dark} />Starred
							</NavLink>
						</li>
						<li>
							<NavLink to={{ pathname: base + '/trash' }} isActive={this.trashLinkIsActive}>
								<Icon name="deleteOutline" size={1.5} color={IconStyle.Dark} />Trash
							</NavLink>
						</li>
					</ul>
				</nav>
			</aside>
		);
	}

	private homeLinkIsActive(_: match, l: Location): boolean {
		return (l && (l.pathname === paths.APPS.FILES || l.pathname.includes(paths.APPS.FILES + '/d')));
	}

	private sharedLinkIsActive(_: match, l: Location): boolean {
		return (l && l.pathname.includes(paths.APPS.FILES + '/shared'));
	}

	private starredLinkIsActive(_: match, l: Location): boolean {
		return (l && l.pathname.includes(paths.APPS.FILES + '/starred'));
	}

	private trashLinkIsActive(_: match, l: Location): boolean {
		return (l && l.pathname.includes(paths.APPS.FILES + '/trash'));
	}

	private onAddButtonClicked = () => {
		log.debug('Add button clicked');
		this.addDropdownVisible = !this.addDropdownVisible;
	}
}

export default Sidebar;
