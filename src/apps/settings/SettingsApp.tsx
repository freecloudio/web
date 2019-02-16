import './SettingsApp.scss';
import * as React from 'react';
import SettingsSidebar from './SettingsSidebar';

class SettingsApp extends React.Component {
	public render() {
		return (
			<div className="settings-app">
				<SettingsSidebar isAdmin={true}/>
				<div className="settings">
					Sorry, no stats for you :(
				</div>
			</div>
		);
	}
}

export default SettingsApp;
