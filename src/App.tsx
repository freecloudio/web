import './App.scss';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import * as React from 'react';

import MainSidebar from './shell/MainSidebar';
import FileApp from './apps/files/FileApp';
import CalendarApp from './apps/calendar/CalendarApp';
import SettingsApp from './apps/settings/SettingsApp';
import { userStore } from './store/UserStore';
import Login from './Login';
import { observer } from 'mobx-react';
import PrivateRoute from './core/PrivateRoute';
import { authStore } from './store/AuthStore';
import Notifications from './shell/Notifications';
import paths from './paths';

@observer
class App extends React.Component {
	public render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Notifications/>
					{ authStore.isSignedIn ? <MainSidebar userStore={userStore} /> : null }
					<main className={authStore.isSignedIn ? '' : 'fullbleed'}>
						<Route exact path="/" render={FilesRedirect} />
						<PrivateRoute exact path={paths.APPS.FILES} component={FileApp} />
						<PrivateRoute exact path={paths.APPS.FILES + '/:type'} component={FileApp} />
						<PrivateRoute path={paths.APPS.FILES + '/:type/*'} component={FileApp} />

						<PrivateRoute path={paths.APPS.CALENDAR} component={CalendarApp} />
						<PrivateRoute path={paths.APPS.SETTINGS} component={SettingsApp} />

						<Route path={paths.AUTH} component={Login} />
					</main>
				</div>
			</BrowserRouter>
		);
	}
}

const FilesRedirect = () => (<Redirect to="/apps/files" />);

export default App;
