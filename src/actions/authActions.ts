import { AuthApiFp, User } from 'src/api';

import { getAPIBasePath } from '../utils/getBasePath';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { Store } from 'src/store';

export type Action = {
	type: 'FETCH_SIGN_IN',
} | {
	type: 'FETCH_SIGN_IN_DONE',
	sessionToken: string,
} | {
	type: 'FETCH_SIGN_IN_ERROR',
	response: Response,
} | {
	type: 'FETCH_SIGN_UP',
} | {
	type: 'FETCH_SIGN_UP_DONE',
	sessionToken: string,
} | {
	type: 'FETCH_SIGN_UP_ERROR',
	response: Response,
} | {
	type: 'FETCH_SIGN_OUT',
} | {
	type: 'FETCH_SIGN_OUT_DONE',
} | {
	type: 'FETCH_SIGN_OUT_ERROR',
	response: Response,
};

function fetchSignIn(): Action {
	return { type: 'FETCH_SIGN_IN' };
}

function fetchSignInDone(sessionToken: string): Action {
	return {
		type: 'FETCH_SIGN_IN_DONE',
		sessionToken,
	};
}

function fetchSignInError(response: Response): Action {
	return {
		type: 'FETCH_SIGN_IN_ERROR',
		response,
	};
}

export function signIn(email: string, password: string): ThunkAction<void, Store, null, Action> {
	return async (dispatch: ThunkDispatch<Store, null, Action>) => {
		dispatch(fetchSignIn());
		try {
			const token = await AuthApiFp().login({email, password})(undefined, getAPIBasePath());
			dispatch(fetchSignInDone(token.token || ''));
		} catch (response) {
			dispatch(fetchSignInError(response));
		}
	};
}

function fetchSignUp(): Action {
	return { type: 'FETCH_SIGN_UP' };
}

function fetchSignUpDone(sessionToken: string): Action {
	return {
		type: 'FETCH_SIGN_UP_DONE',
		sessionToken,
	};
}

function fetchSignUpError(response: Response): Action {
	return {
		type: 'FETCH_SIGN_UP_ERROR',
		response,
	};
}

export function signUp(userData: User): ThunkAction<void, Store, null, Action> {
	return async (dispatch: ThunkDispatch<Store, null, Action>) => {
		dispatch(fetchSignUp());
		try {
			const token = await AuthApiFp().signup(userData)(undefined, getAPIBasePath());
			dispatch(fetchSignUpDone(token.token || ''));
		} catch (response) {
			dispatch(fetchSignUpError(response));
		}
	};
}

function fetchSignOut(): Action {
	return {
		type: 'FETCH_SIGN_OUT',
	};
}

function fetchSignOutDone(): Action {
	return {
		type: 'FETCH_SIGN_OUT_DONE',
	};
}

function fetchSignOutError(response: Response): Action {
	return {
		type: 'FETCH_SIGN_OUT_ERROR',
		response,
	};
}

export function signOut(): ThunkAction<void, Store, null, Action> {
	return async (dispatch: ThunkDispatch<Store, null, Action>, getState) => {
		const token = getState().auth.sessionToken;
		dispatch(fetchSignOut());
		try {
			// TODO: we need to pass the token
			await AuthApiFp({ accessToken: token }).logout()(undefined, getAPIBasePath());
			dispatch(fetchSignOutDone());
		} catch (response) {
			dispatch(fetchSignOutError(response));
		}
	};
}
