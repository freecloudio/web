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
import paths from "./paths";

@observer
class Login extends React.Component<RouteComponentProps, object> {

	private readonly log = new Log("Login");
	@observable private proceed = false;
	@observable private signupFirstName = '';
	@observable private signupLastName = '';
	@observable private signupEmail = '';
	@observable private signupPassword = '';
	@observable private signupConfirmPassword = '';
	@observable private loginEmail = '';
	@observable private loginPassword = '';

	constructor(props: RouteComponentProps) {
		super(props);
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
								<InputField
									type="text"
									label="first name"
									style={InputStyle.Dark}
									autocomplete="first name"
									onChange={this.onSignupFirstNameChanged}
									value={this.signupFirstName}
								/>
								<InputField
									type="text"
									label="last name"
									style={InputStyle.Dark}
									autocomplete="last name"
									onChange={this.onSignupLastNameChanged}
									value={this.signupLastName}
								/>
								<InputField
									type="email"
									label="eMail"
									style={InputStyle.Dark}
									autocomplete="email"
									onChange={this.onSignupEmailChanged}
									value={this.signupEmail}
								/>
								<InputField
									type="password"
									label="password"
									style={InputStyle.Dark}
									autocomplete="password"
									onChange={this.onSignupPasswordChanged}
									value={this.signupPassword}
								/>
								<InputField
									type="password"
									label="confirm password"
									style={InputStyle.Dark}
									autocomplete="password"
									onChange={this.onSignupConfirmPasswordChanged}
									value={this.signupConfirmPassword}
								/>
								<Button style={ButtonStyle.Primary} onClick={this.onSignup}>Signup</Button>
							</form>
						</main>
						<footer>
							<Link to={paths.LOGIN}>I already have an account.</Link>
						</footer>
					</div>
					<div className={ isLogin ? "login" : "login inactive" }>
						<header><Image src={logo} /> freecloud</header>
						<main>
							<h1>Welcome back</h1>
							{ /* tslint:disable-next-line */}
							<form onSubmit={(event: React.FormEvent) => { event.preventDefault() }} className="form">
								<InputField
									type="email"
									label="eMail"
									style={InputStyle.Dark}
									autocomplete="email"
									onChange={this.onLoginEmailChanged}
									value={this.loginEmail}
								/>
								<InputField
									type="password"
									label="password"
									style={InputStyle.Dark}
									autocomplete="password"
									onChange={this.onLoginPasswordChanged}
									value={this.loginPassword}
								/>
								<Button style={ButtonStyle.Primary} onClick={this.onLogin}>Login</Button>
							</form>
						</main>
						<footer>
							<Link to={paths.SIGNUP}>I don't have an account yet.</Link>
						</footer>
					</div>
				</div>
			</div>
		);
	}

	private onSignupFirstNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.signupFirstName = event.target.value;
	}

	private onSignupLastNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.signupLastName = event.target.value;
	}

	private onSignupEmailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.signupEmail = event.target.value;
	}

	private onSignupPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.signupPassword = event.target.value;
	}

	private onSignupConfirmPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.signupConfirmPassword = event.target.value;
	}

	private onLoginEmailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.loginEmail = event.target.value;
	}

	private onLoginPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.loginPassword = event.target.value;
	}

	private onLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
		this.log.debug("Login");
		try {
			await authStore.login(this.loginEmail, this.loginPassword);
			this.proceed = true;
		} catch (err) {
			notificationStore.sendNotification('Login failed, please check your email and password.', NotificationType.NEGATIVE);
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
