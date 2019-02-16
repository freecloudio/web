import { Action } from '../actions';
import { AuthState } from 'src/store/authStore';

const initialState: AuthState = {
	sessionToken: '',
	isSignedIn: false,
	isSigningIn: false,
	isSigningUp: false,
	isSigningOut: false,
};

export default function authReducer(state: AuthState = initialState, action: Action): AuthState {
	switch (action.type) {
		case 'FETCH_SIGN_IN':
			return { 
				...state,
				sessionToken: '',
				isSignedIn: false,
				isSigningIn: true,
			};
		case 'FETCH_SIGN_IN_DONE':
			return { 
				...state,
				sessionToken: action.sessionToken,
				isSignedIn: true,
				isSigningIn: false,
			};
		case 'FETCH_SIGN_IN_ERROR':
			return {
				...state,
				sessionToken: '',
				isSignedIn: false,
				isSigningIn: false,
			};
		case 'FETCH_SIGN_UP':
			return {
				...state,
				sessionToken: '',
				isSignedIn: false,
				isSigningUp: true,
				isSigningIn: false,
			};
		case 'FETCH_SIGN_UP_DONE':
			return {
				...state,
				sessionToken: action.sessionToken,
				isSignedIn: true,
				isSigningIn: false,
				isSigningUp: false,
			};
		case 'FETCH_SIGN_UP_ERROR':
			return {
				...state,
				sessionToken: '',
				isSignedIn: false,
				isSigningIn: false,
				isSigningUp: false,
			};
		case 'FETCH_SIGN_OUT':
			return {
				...state,
				isSignedIn: false,
				isSigningOut: true,
				sessionToken: '',
			};
		case 'FETCH_SIGN_OUT_DONE':
			return {
				...state,
				isSignedIn: false,
				isSigningOut: false,
				sessionToken: '',
			};
		case 'FETCH_SIGN_OUT_ERROR':
			return {
				...state,
				isSignedIn: false,
				isSigningOut: false,
				sessionToken: '',
			};
		default:
			return state;
	}
}
