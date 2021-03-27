import { RouteProps } from "react-router";
import { Route, Redirect } from "react-router-dom";
import useUser from "../api/hooks/useUser";

function ProtectedRoute(props: RouteProps) {
	const { user } = useUser();
	if (user) {
		return <Route {...props} />;
	}
	// FIXME: Extract the login page path to a constant
	return (
		<Route {...props}>
			<Redirect
				to={`/login?goTo=${encodeURIComponent(props.path?.toString() || "")}`}
			/>
		</Route>
	);
}

export default ProtectedRoute;
