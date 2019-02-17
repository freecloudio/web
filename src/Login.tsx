import './Login.scss';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { parse as parseQueryParams } from 'querystring';
import { Log } from './Log';
import TextInput, { InputStyle } from './core/TextInput';

import * as cover from './res/img/upload_cover.svg';
import * as logo from './res/img/logo_color.svg';
import Button from './core/Button';
import Image from './core/Image';
import { Redirect, RouteComponentProps } from 'react-router';
import paths from './paths';
import { connect } from 'react-redux';
import * as notificationActions from './actions/notificationActions';
import * as authActions from './actions/authActions';
import { NotificationType } from './store/notificationStore';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from './actions';
import { Store } from './store';
import { AuthState } from './store/authStore';
import { User } from './api';

interface Props extends RouteComponentProps {
	sendNotification: typeof notificationActions.sendNotification;
	signIn: typeof authActions.signIn;
	signUp: typeof authActions.signUp;
	authState: AuthState;
}

const log = new Log('Login');

const Login: React.FunctionComponent<Props> = ({ location, sendNotification, signIn, signUp, authState }) => {

	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [signupPassword, setSignupPassword] = React.useState('');
	const [signupPasswordConfirm, setSignupPasswordConfirm] = React.useState('');
	const [loginPassword, setLoginPassword] = React.useState('');

	const onLogin = () => {
		log.debug('Login');
		signIn(email, loginPassword);
	};

	const onSignup = () => {
		log.debug('Signup');
		if (signupPassword !== signupPasswordConfirm) {
			sendNotification("The passwords you entered don't match", 'negative');
			return;
		}
		signUp({
			firstName,
			lastName,
			email,
			password: signupPassword,
		});

	};

	const isLogin = location.pathname.includes('login');
	log.debug(`Rerendering ${isLogin ? 'login' : 'signup'} page`);
	if (authState.isSignedIn) {
		if (location.search) {
			const searchString = location.search.substring(1);
			const queryParams = parseQueryParams(searchString);
			if (queryParams.to && typeof (queryParams.to) === 'string') {
				return (
					<Redirect to={decodeURIComponent(queryParams.to as string)} />
				);
			}
		}
		return (
			<Redirect to="/" />
		);
	}
	return (
		<div className="login-page">
			<div className="box">
				<div className={isLogin ? 'slider' : 'slider right'}>
					<Image src={cover} className="cover-img" />
				</div>
				<div className={isLogin ? 'signup inactive' : 'signup'}>
					<header><Image src={logo} /> freecloud</header>
					<main>
						<h1>Sign up for freecloud</h1>
						<form className="form">
							<TextInput
								type="text"
								label="first name"
								style={InputStyle.Dark}
								autocomplete="first name"
								onChange={setFirstName}
								value={firstName}
							/>
							<TextInput
								type="text"
								label="last name"
								style={InputStyle.Dark}
								autocomplete="last name"
								onChange={setLastName}
								value={lastName}
							/>
							<TextInput
								type="email"
								label="eMail"
								style={InputStyle.Dark}
								autocomplete="email"
								onChange={setEmail}
								value={email}
							/>
							<TextInput
								type="password"
								label="password"
								style={InputStyle.Dark}
								autocomplete="password"
								onChange={setSignupPassword}
								value={signupPassword}
							/>
							<TextInput
								type="password"
								label="confirm password"
								style={InputStyle.Dark}
								autocomplete="password"
								onChange={setSignupPasswordConfirm}
								value={signupPasswordConfirm}
							/>
							<Button style="primary" onClick={onSignup}>Signup</Button>
						</form>
					</main>
					<footer>
						<Link to={paths.LOGIN}>I already have an account.</Link>
					</footer>
				</div>
				<div className={isLogin ? 'login' : 'login inactive'}>
					<header><Image src={logo} /> freecloud</header>
					<main>
						<h1>Welcome back</h1>
						{ /* tslint:disable-next-line */}
						<form onSubmit={(event: React.FormEvent) => { event.preventDefault() }} className="form">
							<TextInput
								type="email"
								label="eMail"
								style={InputStyle.Dark}
								autocomplete="email"
								onChange={setEmail}
								value={email}
							/>
							<TextInput
								type="password"
								label="password"
								style={InputStyle.Dark}
								autocomplete="password"
								onChange={setLoginPassword}
								value={loginPassword}
							/>
							<Button style="primary" onClick={onLogin}>Login</Button>
						</form>
					</main>
					<footer>
						<Link to={paths.SIGNUP}>I don't have an account yet.</Link>
					</footer>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps(store: Store) {
	return {
		authState: store.auth,
	};
}

function mapDispatchToProps(dispatch: ThunkDispatch<Store, null, Action>) {
	return {
		sendNotification: (text: string, type?: NotificationType) => dispatch(notificationActions.sendNotification(text, type)),
		signIn: (email: string, password: string) => dispatch(authActions.signIn(email, password)),
		signUp: (userData: User) => dispatch(authActions.signUp(userData)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
