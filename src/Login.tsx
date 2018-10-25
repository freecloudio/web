import "./Login.scss";
import * as React from "react";
import { Log } from "./Log";
import InputField, { InputStyle } from "./core/InputField";

import * as cover from "./res/img/upload_cover.svg";
import * as logo from "./res/img/logo_color.svg";
import { observer } from "mobx-react";
import { observable } from "mobx";
import Button, { ButtonStyle } from "./core/Button";
import Image from "./core/Image";
import { authStore } from "./store/AuthStore";
import { Redirect } from "react-router";

@observer
class Login extends React.Component {

	private readonly log = new Log("Login");
	private email = "";
	private password = "";
	@observable private isLogin = true;
	@observable private proceed = false;

	public render() {
		if (this.proceed) {
			// TODO: Are we coming from somewhere? Redirect there
			return (
				<Redirect to="/"/>
			);
		}
		return (
			<div className="login-page">
				<div className="box">
					<div className={this.isLogin ? "slider" : "slider right"}>
						<Image src={cover} className="cover-img"/>
					</div>
					<div className="signup">
						<header><Image src={logo} /> freecloud</header>
						<main>
							<h1>Sign up for freecloud</h1>
							<form className="form">
								<InputField type="text" label="name" style={InputStyle.Dark} autocomplete="name"/>
								<InputField type="email" label="eMail" style={InputStyle.Dark} autocomplete="email"/>
								<InputField type="password" label="password" style={InputStyle.Dark} autocomplete="password"/>
								<InputField type="password" label="confirm password" style={InputStyle.Dark} autocomplete="password"/>
								<Button text="Signup" style={ButtonStyle.Primary} onClick={this.onSignup}/>
							</form>
						</main>
						<footer>
							<a href="" onClick={this.gotoLogin}>I already have an account.</a>
						</footer>
					</div>
					<div className="login">
						<header><Image src={logo} /> freecloud</header>
						<main>
							<h1>Welcome back</h1>
							{ /* tslint:disable-next-line */ }
							<form onSubmit={(event: React.FormEvent) => {event.preventDefault()}} className="form">
								<InputField type="email" label="eMail" style={InputStyle.Dark} autocomplete="email"/>
								<InputField type="password" label="password" style={InputStyle.Dark} autocomplete="password"/>
								<Button style={ButtonStyle.Primary} text="Login" onClick={this.onLogin}/>
							</form>
						</main>
						<footer>
							<a href="" onClick={this.gotoSignup}>I don't have an account yet.</a>
						</footer>
					</div>
				</div>
			</div>
		);
	}

	private gotoSignup = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		this.isLogin = false;
	}

	private gotoLogin = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		this.isLogin = true;
	}

	private onLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
		this.log.debug("Login");
		try {
			await authStore.signIn(this.email, this.password);
			this.proceed = true;
		} catch (err) {
			this.log.error(err);
		}
	}

	private onSignup = async (event: React.MouseEvent<HTMLButtonElement>) => {
		this.log.debug("Signup");
		try {
			await authStore.signIn(this.email, this.password);
			this.proceed = true;
		} catch (err) {
			this.log.error(err);
		}
	}
}

export default Login;
