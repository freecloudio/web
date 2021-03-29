import { Redirect, useHistory, useParams } from "react-router";
import { login } from "../api/mutations/user";
import useUser from "../api/hooks/useUser";
import Button from "./Button";
import Box from "./Box";
import Card from "./Card";
import Logo from "./Logo";
import TextInput from "./TextInput";

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

	return (
		<Box>
			<Card color="alt" direction="col">
				<Logo size="xl" />
				<h1>Welcome to freecloud!</h1>
				<p>Sign in to access your files, calendar, contacts and more</p>
				<TextInput type="email" />
				<TextInput type="password" />
				<Button primary onClick={onLoginClicked}>
					Sign in
				</Button>
			</Card>
		</Box>
	);
}

export default LoginPage;
