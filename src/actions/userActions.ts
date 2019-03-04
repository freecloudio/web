import { User, UserApiFp } from 'src/api';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Store } from 'src/store';
import { getAPIBasePath } from 'src/utils/getBasePath';
import { isUnauthorized } from 'src/utils/apiRequests';
import { signOut } from 'src/actions/authActions';

export type Action = {
	type: 'FETCH_CURRENT_USER',
} | {
	type: 'FETCH_CURRENT_USER_DONE',
	user: User,
} | {
	type: 'FETCH_CURRENT_USER_ERROR',
	response: Response,
} | {
	type: 'FETCH_USER',
	id: number,
} | { 
	type: 'FETCH_USER_DONE',
	id: number,
	user: User,
} | {
	type: 'FETCH_USER_ERROR',
	id: number,
	response: Response,
};

function fetchCurrentUser(): Action {
	return {
		type: 'FETCH_CURRENT_USER',
	};
}

function fetchCurrentUserDone(user: User): Action {
	return {
		type: 'FETCH_CURRENT_USER_DONE',
		user,
	};
}

function fetchCurrentUserError(response: Response): Action {
	return {
		type: 'FETCH_CURRENT_USER_ERROR',
		response,
	};
}

export function getCurrentUser(): ThunkAction<void, Store, null, Action> {
	return async (dispatch: ThunkDispatch<Store, null, Action>, getStore) => {
		// TODO: Better error handling, create function/annotation to ease this process
		const authToken = getStore().auth.sessionToken;
		if (!authToken) {
			throw new Error('Unauthorized');
		}
		dispatch(fetchCurrentUser());
		try {
			const user = await UserApiFp({ accessToken: authToken }).getCurrentUser()(undefined, getAPIBasePath());
			dispatch(fetchCurrentUserDone(user));
		} catch (response) {
			if (isUnauthorized(response)) {
				dispatch(signOut());
			}
			dispatch(fetchCurrentUserError(response));
		}
	};
}

function fetchUser(id: number): Action {
	return {
		type: 'FETCH_USER',
		id,
	};
}

function fetchUserDone(id: number, user: User): Action {
	return {
		type: 'FETCH_USER_DONE',
		id,
		user,
	};
}

function fetchUserError(id: number, response: Response): Action {
	return {
		type: 'FETCH_USER_ERROR',
		id,
		response,
	};
}

export function getUserByID(id: number): ThunkAction<void, Store, null, Action> {
	return async (dispatch: ThunkDispatch<Store, null, Action>, getStore) => {
		const authToken = getStore().auth.sessionToken;
		if (!authToken) {
			throw new Error('Unauthorized');
		}
		dispatch(fetchUser(id));
		try {
			const user = await UserApiFp({ accessToken: authToken }).getUserByID(id)(undefined, getAPIBasePath());
			dispatch(fetchUserDone(id, user));
		} catch (response) {
			if (isUnauthorized(response)) {
				dispatch(signOut());
			}
			dispatch(fetchUserError(id, response));
		}
	};
}
