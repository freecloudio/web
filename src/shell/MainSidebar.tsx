import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './MainSidebar.scss';

import logo from '../res/img/logo_white_nopadding.svg';
import Icon, { IconStyle } from '../core/Icon';
import Avatar from '../core/Avatar';
import Image from '../core/Image';
import PopoverContainer from 'src/core/PopoverContainer';
import Popover from 'src/core/Popover';
import { connect } from 'react-redux';
import { Store } from '../store';
import { bindActionCreators, Dispatch } from 'redux';
import * as authActions from '../actions/authActions';
import { User } from 'src/api';

interface Props {
	currentUser: User;
	actions: typeof authActions;
	
}

const MainSidebar: React.FunctionComponent<Props> = ({currentUser, actions}) => {
	const [userAvatarDropdownVisible, setUserDropdownVisible] = React.useState(false);

	function onAvatarClicked() {
		setUserDropdownVisible(!userAvatarDropdownVisible);
	}

	function onSignOutClicked() {
		actions.signOut();
	}
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
						<Popover visible={userAvatarDropdownVisible} onClick={onAvatarClicked} anchor="bottom">
							<ul>
								<li>
									<Link to="/apps/profile">Your profile</Link>
								</li>
								<li>
									<span onClick={onSignOutClicked}>Sign out</span>
								</li>
							</ul>
						</Popover>
					}
				>
					<Avatar
						firstName={currentUser.firstName || ''}
						lastName={currentUser.lastName || ''}
						size={3}
						onClick={onAvatarClicked}
					/>
				</PopoverContainer>
			</section>
		</header>
	);

};

function mapStateToProps(state: Store) {
	return {
		currentUser: state.users.currentUser,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		actions: bindActionCreators(authActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSidebar);
