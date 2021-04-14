import { RouteProps } from "react-router";
import { Route, Redirect } from "react-router-dom";
import useUser from "../api/hooks/useUser";

function ProtectedRoute(props: RouteProps) {
	const { loggedOut } = useUser();
	if (loggedOut) {
		console.log("Route at path", props.path, "will redirect to signin");
		// FIXME: Extract the login page path to a constant
		return (
			<Route {...props}>
				<Redirect
					to={`/login?goTo=${encodeURIComponent(props.path?.toString() || "")}`}
				/>
			</Route>
		);
	}
	console.log("Route at path", props.path, "rendered, user is authenticated");
	return <Route {...props} />;
}

export default ProtectedRoute;
