import "./SettingsSidebar.scss";
import * as React from "react";
import { NavLink } from "react-router-dom";
import Icon, { IconStyle } from "src/core/Icon";

interface Props {
	isAdmin: boolean;
}

class SettingsSidebar extends React.Component<Props, object> {
	constructor(props: Props) {
		super(props);
	}

	public render() {
		const base = "/apps/settings";

		return (
			<aside className="settings-sidebar">
				<h1>Settings</h1>
				{ this.props.isAdmin && <h2>Personal Settings</h2> }
				<nav>
					<ul>
						<li>
							<NavLink to={{ pathname: base }}>
								<Icon name="accountOutline" size={1.5} color={IconStyle.Dark} />Profile
							</NavLink>
						</li>
						<li>
							<NavLink to={{ pathname: base + "/personal/security" }}>
								<Icon name="lockOutline" size={1.5} color={IconStyle.Dark} />Security
							</NavLink>
						</li>
						<li>
							<NavLink to={{ pathname: base + "/personal/sharing" }}>
								<Icon name="shareVariant" size={1.5} color={IconStyle.Dark} />Sharing
							</NavLink>
						</li>
					</ul>
				</nav>
				{ this.props.isAdmin && <h2>System Settings</h2> }
				{ this.props.isAdmin &&
						<nav>
						<ul>
							<li>
								<NavLink to={{ pathname: base + "/system/dashboard" }}>
									<Icon name="viewDashboardOutline" size={1.5} color={IconStyle.Dark}/>Dashboard
								</NavLink>
							</li>
							<li>
								<NavLink to={{ pathname: base + "/system/storage"}}>
									<Icon name="sd" size={1.5} color={IconStyle.Dark}/>Storage
								</NavLink>
							</li>
							<li>
								<NavLink to={{ pathname: base + "/system/users"}}>
									<Icon name="accountOutline" size={1.5} color={IconStyle.Dark}/>Users
								</NavLink>
							</li>
						</ul>
					</nav>
				}
			</aside>
		);
	}
}

export default SettingsSidebar;
