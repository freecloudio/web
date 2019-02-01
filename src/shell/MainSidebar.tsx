import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import { observer } from "mobx-react";

import "./MainSidebar.scss";

import logo from "../res/img/logo_white_nopadding.svg";
import Icon, { IconStyle } from "../core/Icon";
import Avatar from "../core/Avatar";
import Image from "../core/Image";
import { UserStore } from "../store/UserStore";
import PopoverContainer from "src/core/PopoverContainer";
import Popover from "src/core/Popover";
import { observable } from "mobx";
import { authStore } from "src/store/AuthStore";

interface Props {
	userStore: UserStore;
}

@observer
class MainSidebar extends React.Component<Props, object> {
	@observable private userAvatarDropdownVisible: boolean = false;

	public render() {
		return (
			<header className="mainsidebar">
				<section className="top">
					<div className="logo-container">
						<Image className="logo" src={logo} />
					</div>
					<nav>
						<NavLink className="app-link" to="/apps/files"><Icon name="folderOutline" color={IconStyle.White} size={1.5} /></NavLink>
						<NavLink className="app-link" to="/apps/calendar"><Icon name="calendar" color={IconStyle.White} size={1.5} /></NavLink>
						<NavLink className="app-link" to="/apps/images"><Icon name="imageOutline" color={IconStyle.White} size={1.5} /></NavLink>
						<NavLink className="app-link" to="/apps/contacts"><Icon name="accountMultipleOutline" color={IconStyle.White} size={1.5} /></NavLink>
					</nav>
				</section>
				<section className="bottom">
					<NavLink className="app-link" to="/apps/settings"><Icon name="settingsOutline" color={IconStyle.White} size={1.5} /></NavLink>
					<PopoverContainer
						popover={
							<Popover visible={this.userAvatarDropdownVisible} onClick={this.onAvatarClicked} anchor="bottom">
								<ul>
									<li>
										<Link to="/apps/profile">Your profile</Link>
									</li>
									<li>
										<span onClick={this.onSignOutClicked}>Sign out</span>
									</li>
								</ul>
							</Popover>
						}
					>
						<Avatar 
							firstName={this.props.userStore.currentUser.firstName || ''}
							lastName={this.props.userStore.currentUser.lastName || ''}
							size={3}
							onClick={this.onAvatarClicked}
						/>
					</PopoverContainer>
				</section>
			</header>
		);
	}

	private onAvatarClicked = () => {
		this.userAvatarDropdownVisible = !this.userAvatarDropdownVisible;
	}

	private onSignOutClicked() {
		authStore.signOut();
	}
}

export default MainSidebar;
