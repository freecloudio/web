import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import paths from 'src/paths';

interface Props extends RouteProps {
	isSignedIn: boolean;
}

/**
 * PrivateRoute is a wrapper around react-router's Route component.
 * When matched, it checks whether the user is signed in, and if not, redirects
 * to the login page.
 */
const PrivateRoute: React.FunctionComponent<Props> = ({ isSignedIn, component, ...rest }) => {
	const Component = component!;
	return (
		<Route
			{...rest}
			render={(props) =>
				isSignedIn ? (
					<Component {...props} />
				) : (
						<Redirect
							to={{
								pathname: paths.LOGIN,
								state: { from: props.location },
							}}
						/>
					)
			}
		/>
	);
};

export default PrivateRoute;
