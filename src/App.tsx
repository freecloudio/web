import './App.scss';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import * as React from 'react';
import { connect } from 'react-redux';

import MainSidebar from './shell/MainSidebar';
import FileApp from './apps/files/FileApp';
import CalendarApp from './apps/calendar/CalendarApp';
import SettingsApp from './apps/settings/SettingsApp';
import Login from './Login';
import PrivateRoute from './core/PrivateRoute';
import { AuthState } from './store/authStore';
import Notifications from './shell/Notifications';
import paths from './paths';
import { Store } from './store';

interface Props {
	auth: AuthState;
}

const App: React.FunctionComponent<Props> = ({ auth }) => {
	return (
		<BrowserRouter>
			<div className="App">
				<Notifications />
				{auth.isSignedIn ? <MainSidebar /> : null}
				<main className={auth.isSignedIn ? '' : 'fullbleed'}>
					{ /* Default to the Files App */}
					<Route exact path="/" render={FilesRedirect} />
					<PrivateRoute path={paths.APPS.FILES} component={FileApp} isSignedIn={auth.isSignedIn} />
					<PrivateRoute path={paths.APPS.CALENDAR} component={CalendarApp} isSignedIn={auth.isSignedIn} />
					<PrivateRoute path={paths.APPS.SETTINGS} component={SettingsApp} isSignedIn={auth.isSignedIn} />

					<Route path={paths.AUTH} component={Login} />
				</main>
			</div>
		</BrowserRouter>
	);
};

const FilesRedirect = () => (<Redirect to="/apps/files" />);

function mapStateToProps(state: Store) {
	return {
		auth: state.auth,
	};
}

export default connect(mapStateToProps)(App);
