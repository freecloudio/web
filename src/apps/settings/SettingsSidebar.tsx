import './SettingsSidebar.scss';
import * as React from 'react';
import { NavLink, match } from 'react-router-dom';
import Icon, { IconStyle } from 'src/core/Icon';
import paths from 'src/paths';
import { Location } from 'history';

interface Props {
	isAdmin: boolean;
}

const SettingsSidebar: React.FunctionComponent<Props> = ({isAdmin}) => {
	function isNavLinkActive(path: string) {
		return (_: match, l: Location)	=> (l && l.pathname === path);
	}

	return (
		<aside className="settings-sidebar">
			<h1>Settings</h1>	
			{ isAdmin && (<h2>Personal Settings</h2>) }
			<nav>
				<ul>
					<li>
						<NavLink to={paths.APPS.SETTINGS} isActive={isNavLinkActive(paths.APPS.SETTINGS)}>
							<Icon name="accountOutline" size={1.5} color={IconStyle.Dark} />Profile
						</NavLink>
					</li>
					<li>
						<NavLink to={paths.APPS.SETTINGS + '/personal/security' } isActive={isNavLinkActive(paths.APPS.SETTINGS + '/personal/security')}>
							<Icon name="lockOutline" size={1.5} color={IconStyle.Dark} />Security
						</NavLink>
					</li>
					<li>
						<NavLink to={paths.APPS.SETTINGS + '/personal/sharing' } isActive={isNavLinkActive(paths.APPS.SETTINGS + '/personal/sharing')}>
							<Icon name="shareVariant" size={1.5} color={IconStyle.Dark} />Sharing
						</NavLink>
					</li>
				</ul>
			</nav>
			{ isAdmin && <h2>System Settings</h2> }
			{ isAdmin &&
				<nav>
					<ul>
						<li>
							<NavLink to={ paths.APPS.SETTINGS + '/system/dashboard' } isActive={isNavLinkActive(paths.APPS.SETTINGS + '/system/dashboard')}>
								<Icon name="viewDashboardOutline" size={1.5} color={IconStyle.Dark}/>Dashboard
							</NavLink>
						</li>
						<li>
							<NavLink to={ paths.APPS.SETTINGS + '/system/storage'} isActive={isNavLinkActive(paths.APPS.SETTINGS + '/system/storage')}>
								<Icon name="sd" size={1.5} color={IconStyle.Dark}/>Storage
							</NavLink>
						</li>
						<li>
							<NavLink to={ paths.APPS.SETTINGS + '/system/users'} isActive={isNavLinkActive(paths.APPS.SETTINGS + '/system/users')}>
								<Icon name="accountOutline" size={1.5} color={IconStyle.Dark}/>Users
							</NavLink>
						</li>
					</ul>
				</nav> }
		</aside>
	);
};

export default SettingsSidebar;
