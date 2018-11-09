import "./SettingsApp.scss";
import * as React from "react";
import { SystemApi, SystemStats } from "src/api";
import { authStore } from "src/store/AuthStore";
import { observable } from "mobx";
import { observer } from "mobx-react";
import SettingsSidebar from "./SettingsSidebar";

@observer
class SettingsApp extends React.Component {
	private systemAPI: SystemApi;
	@observable private systemStats: SystemStats = {};

	constructor(props: any) {
		super(props);

		const l = window.location;
		this.systemAPI = new SystemApi(authStore.getAuthorizedAPIConfiguration(), l.protocol + "//" + l.hostname + ":" + l.port + "/api/v1");
	}

	public async componentDidMount() {
		this.systemStats = await this.systemAPI.getSystemStats();
	}

	public render() {
		return (
			<div className="settings-app">
				<SettingsSidebar isAdmin={true}/>
				<div className="settings">
					Running on {this.systemStats.goVersion}
				</div>
			</div>
		);
	}
}

export default SettingsApp;
