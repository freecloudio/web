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
import { notificationStore, NotificationType } from "./store/NotificationStore";

@observer
class Login extends React.Component {

	private readonly log = new Log("Login");
	@observable private isLogin = true;
	@observable private proceed = false;
	private readonly signupFirstName: React.RefObject<InputField>;
	private readonly signupLastName: React.RefObject<InputField>;
	private readonly signupEmail: React.RefObject<InputField>;
	private readonly signupPassword: React.RefObject<InputField>;
	private readonly signupConfirmPassword: React.RefObject<InputField>;
	private readonly loginEmail: React.RefObject<InputField>;
	private readonly loginPassword: React.RefObject<InputField>;

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
								<InputField type="text" label="first name" style={InputStyle.Dark} autocomplete="name" ref={this.signupFirstName}/>
								<InputField type="text" label="last name" style={InputStyle.Dark} autocomplete="name" ref={this.signupLastName}/>
								<InputField type="email" label="eMail" style={InputStyle.Dark} autocomplete="email" ref={this.signupEmail}/>
								<InputField type="password" label="password" style={InputStyle.Dark} autocomplete="password" ref={this.signupPassword}/>
								<InputField type="password" label="confirm password" style={InputStyle.Dark} autocomplete="password" ref={this.signupConfirmPassword}/>
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
								<InputField type="email" label="eMail" style={InputStyle.Dark} autocomplete="email" ref={this.loginEmail}/>
								<InputField type="password" label="password" style={InputStyle.Dark} autocomplete="password" ref={this.loginPassword}/>
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
			// TODO: Investigate whether these are always != null
			await authStore.signIn(this.loginEmail.current!.value, this.loginPassword.current!.value);
			this.proceed = true;
		} catch (err) {
			this.log.error(err);
		}
	}

	private onSignup = async (event: React.MouseEvent<HTMLButtonElement>) => {
		this.log.debug("Signup");
		if (this.signupPassword.current!.value !== this.signupConfirmPassword.current!.value) {
			notificationStore.sendNotification("The passwords you entered don't match", NotificationType.NEGATIVE);
			return;
		}
		try {
			await authStore.signUp(
				this.signupFirstName.current!.value,
				this.signupLastName.current!.value,
				this.signupEmail.current!.value,
				this.signupPassword.current!.value,
			);
			this.proceed = true;
		} catch (err) {
			this.log.error(err);
		}
	}
}

export default Login;
