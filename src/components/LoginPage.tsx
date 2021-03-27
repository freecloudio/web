import { Redirect, useHistory, useParams } from "react-router";
import { login } from "../api/mutations/user";
import useUser from "../api/hooks/useUser";

function LoginPage() {
	const history = useHistory();
	const { goTo } = useParams<{ goTo?: string }>();
	const { user, mutate } = useUser();

	async function onLoginClicked() {
		await login();
		mutate();
		history.replace("/");
	}

	if (user) {
		if (goTo) {
			return <Redirect to={decodeURIComponent(goTo)} />;
		}
		return <Redirect to="/" />;
	}

	return <button onClick={onLoginClicked}>Login now!</button>;
}

export default LoginPage;
