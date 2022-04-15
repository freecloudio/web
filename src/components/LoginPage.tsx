import { Navigate, useParams } from "react-router";
import useUser from "../api/hooks/useUser";
import { login } from "../api/mutations/user";
import Box from "./Box";
import Button from "./Button";
import Card from "./Card";
import Logo from "./Logo";
import Spinner from "./Spinner";
import TextInput from "./TextInput";

function LoginPage() {
  const { goTo } = useParams<{ goTo?: string }>();
  const { loading, loggedOut, mutate } = useUser();

  async function onLoginClicked() {
    await login();
    mutate();
  }

  if (loggedOut || loading) {
    if (loading) {
      console.log("Loading...");
    }
    return (
      <Box>
        <Card color="alt" direction="col">
          <Logo size="xl" />
          <h1>Welcome to freecloud!</h1>
          <p>Sign in to access your files, calendar, contacts and more</p>
          <Box direction="col" gap="md">
            <TextInput type="email" />
            <TextInput type="password" />
            {loading ? (
              <Spinner />
            ) : (
              <Button primary onClick={onLoginClicked}>
                {" "}
                Sign in{" "}
              </Button>
            )}
          </Box>
        </Card>
      </Box>
    );
  }

  if (goTo) {
    return <Navigate to={"/" + decodeURIComponent(goTo)} />;
  }
  return <Navigate to="/" />;
}

export default LoginPage;
