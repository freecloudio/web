import "./Login.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import { Log } from "./Log";
import InputField, { InputStyle } from "./core/InputField";

import * as cover from "./res/img/upload_cover.svg";
import * as logo from "./res/img/logo_color.svg";
import { observer } from "mobx-react";
import { observable } from "mobx";
import Button, { ButtonStyle } from "./core/Button";
import Image from "./core/Image";
import { authStore } from "./store/AuthStore";
import { Redirect, RouteComponentProps } from "react-router";
import { notificationStore, NotificationType } from "./store/NotificationStore";

@observer
class Login extends React.Component<RouteComponentProps, object> {

	private readonly log = new Log("Login");
	@observable private proceed = false;
	private signupFirstName: string;
	private signupLastName: string;
	private signupEmail: string;
	private signupPassword: string;
	private signupConfirmPassword: string;
	private loginEmail: string;
	private loginPassword: string;

	constructor(props: RouteComponentProps) {
		super(props);
		this.log.debug("Created");
	}

	public render() {
		const isLogin = this.props.location.pathname.includes("login");
		this.log.debug("Rerendering, isLogin is", isLogin);
		if (this.proceed) {
			// TODO: Are we coming from somewhere? Redirect there
			return (
				<Redirect to="/" />
			);
		}
		return (
			<div className="login-page">
				<div className="box">
					<div className={isLogin ? "slider" : "slider right"}>
						<Image src={cover} className="cover-img" />
					</div>
					<div className={ isLogin ? "signup inactive" : "signup"}>
						<header><Image src={logo} /> freecloud</header>
						<main>
							<h1>Sign up for freecloud</h1>
							<form className="form">
								<InputField type="text" label="first name" style={InputStyle.Dark} autocomplete="first name" onChange={this.onSignupFirstNameChanged} />
								<InputField type="text" label="last name" style={InputStyle.Dark} autocomplete="last name" onChange={this.onSignupLastNameChanged} />
								<InputField type="email" label="eMail" style={InputStyle.Dark} autocomplete="email" onChange={this.onSignupEmailChanged} />
								<InputField type="password" label="password" style={InputStyle.Dark} autocomplete="password" onChange={this.onSignupPasswordChanged} />
								<InputField
									type="password"
									label="confirm password"
									style={InputStyle.Dark}
									autocomplete="password"
									onChange={this.onSignupConfirmPasswordChanged}
								/>
								<Button text="Signup" style={ButtonStyle.Primary} onClick={this.onSignup} />
							</form>
						</main>
						<footer>
							<Link to="/auth/login">I already have an account.</Link>
						</footer>
					</div>
					<div className={ isLogin ? "login" : "login inactive" }>
						<header><Image src={logo} /> freecloud</header>
						<main>
							<h1>Welcome back</h1>
							{ /* tslint:disable-next-line */}
							<form onSubmit={(event: React.FormEvent) => { event.preventDefault() }} className="form">
								<InputField type="email" label="eMail" style={InputStyle.Dark} autocomplete="email" onChange={this.onLoginEmailChanged}/>
								<InputField type="password" label="password" style={InputStyle.Dark} autocomplete="password" onChange={this.onLoginPasswordChanged} />
								<Button style={ButtonStyle.Primary} text="Login" onClick={this.onLogin} />
							</form>
						</main>
						<footer>
							<Link to="/auth/signup">I don't have an account yet.</Link>
						</footer>
					</div>
				</div>
			</div>
		);
	}

	private onSignupFirstNameChanged = (value: string) => {
		this.signupFirstName = value;
	}

	private onSignupLastNameChanged = (value: string) => {
		this.signupLastName = value;
	}

	private onSignupEmailChanged = (value: string) => {
		this.signupEmail = value;
	}

	private onSignupPasswordChanged = (value: string) => {
		this.signupPassword = value;
	}

	private onSignupConfirmPasswordChanged = (value: string) => {
		this.signupConfirmPassword = value;
	}

	private onLoginEmailChanged = (value: string) => {
		this.loginEmail = value;
	}

	private onLoginPasswordChanged = (value: string) => {
		this.loginPassword = value;
	}

	private onLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
		this.log.debug("Login");
		try {
			// TODO: Investigate whether these are always != null
			await authStore.login(this.loginEmail, this.loginPassword);
			this.proceed = true;
		} catch (err) {
			this.log.error(err);
		}
	}

	private onSignup = async (event: React.MouseEvent<HTMLButtonElement>) => {
		this.log.debug("Signup");
		if (this.signupPassword !== this.signupConfirmPassword) {
			notificationStore.sendNotification("The passwords you entered don't match", NotificationType.NEGATIVE);
			return;
		}
		try {

			await authStore.signUp(
				this.signupFirstName,
				this.signupLastName,
				this.signupEmail,
				this.signupPassword,
			);
			this.proceed = true;
		} catch (err) {
			this.log.error(err);
		}
	}
}

export default Login;
