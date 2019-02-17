import { User, UserApiFp } from 'src/api';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Store } from 'src/store';
import { getAPIBasePath } from 'src/utils/getBasePath';

export type Action = {
	type: 'FETCH_CURRENT_USER',
} | {
	type: 'FETCH_CURRENT_USER_DONE',
	user: User,
} | {
	type: 'FETCH_CURRENT_USER_ERROR',
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
			dispatch(fetchCurrentUserError(response));
		}
	};
}
