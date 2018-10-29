import "./App.scss";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import * as React from "react";

import MainSidebar from "./shell/MainSidebar";
import FileApp from "./apps/files/FileApp";
import CalendarApp from "./apps/calendar/CalendarApp";
import SettingsApp from "./apps/settings/SettingsApp";
import { userStore } from "./store/UserStore";
import Login from "./Login";
import { observer } from "mobx-react";
import PrivateRoute from "./core/PrivateRoute";
import { authStore } from "./store/AuthStore";
import Notifications from "./shell/Notifications";

@observer
class App extends React.Component {

	public render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Notifications/>
				{ authStore.isSignedIn ? <MainSidebar userStore={userStore} /> : null }
					<main className={authStore.isSignedIn ? "" : "fullbleed"}>
						<Route exact path="/" render={FilesRedirect} />
						{ /* tslint:disable */}
						<PrivateRoute exact path="/apps/files" component={FileApp} />
						<PrivateRoute exact path="/apps/files/:type" component={FileApp} />
						<PrivateRoute path="/apps/files/:type/*" component={FileApp} />
						{ /* tslint:enable */}

						<PrivateRoute path="/apps/calendar" component={CalendarApp} />
						<PrivateRoute path="/apps/settings" component={SettingsApp} />

						<Route path="/login" component={Login} />
					</main>
				</div>
			</BrowserRouter>
		);
	}
}

const FilesRedirect = () => (<Redirect to="/apps/files" />);

export default App;
