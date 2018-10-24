import * as React from "react";
import { Log } from "./Log";

interface Props {
  type: "login" | "signup";
}

class Login extends React.Component<Props, object> {

  private readonly log = new Log("Login");

  public render() {
    if (this.props.type === "login") {
      return (
        <div className="login">
        </div>
      );
    }
    return (
      <div className="signup">
      </div>
    );
  }

  private onLogin = () => {
    this.log.debug("Signing in");
  }
}

export default Login;