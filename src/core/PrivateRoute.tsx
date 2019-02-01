import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { authStore } from 'src/store/AuthStore';
import paths from 'src/paths';
import { Log } from 'src/Log';

interface Props extends RouteProps {
	component: React.ComponentClass;
}

const log = new Log('PrivateRoute');

/**
 * PrivateRoute is a wrapper around react-router's Route component.
 * When matched, it checks whether the user is signed in, and if not, redirects
 * to the login page.
 */
const PrivateRoute = ({ component, ...rest }: Props) => {
	const Component = component;
	return (
		<Route
			{...rest}
			// tslint:disable-next-line
			render={({ match, location }) => {
				log.debug('match, location', match, location);
				return (!authStore.isSignedIn) ? (
					// tslint:disable-next-line
					<Route {...rest} render={() => (<Redirect to={{ pathname: paths.LOGIN, search: match.url ? `to=${encodeURIComponent(match.url)}` : '' }} />)} />
				) : (
						// We use an empty (always matching) <Route/> here, so the child component gets
						// all the Route props passed down the line
						// TODO: investigate whether we can just pass the props from the wrapping <PrivateRoute/>
						/* tslint:disable-next-line */
						<Route {...rest} render={(props) => (<Component {...props} />)} />
					);
			}}
		/>
	);

};

export default PrivateRoute;
