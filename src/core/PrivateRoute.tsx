import * as React from "react";
import { Route, Redirect } from "react-router";
import { authStore } from "src/store/AuthStore";

/**
 * PrivateRoute is a wrapper around react-router's Route component.
 * When matched, it checks whether the user is signed in, and if not, redirects
 * to the login page.
 */
class PrivateRoute extends Route {
 public render() {
	 if (!this.props.component) {
		 throw new Error("'component' prop is not supplied to PrivateRoute");
	 }
	 const {component: Component, ...rest} = this.props;
	 return (
		<Route
			{...rest}
			/* tslint:disable-next-line */
			render={(props) =>
				authStore.isSignedIn ? (
					<Component {...props}/>
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	 );
 }
}

export default PrivateRoute;
