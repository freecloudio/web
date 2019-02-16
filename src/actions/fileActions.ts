import { PathInfo, FileApiFp } from 'src/api';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Store } from 'src/store';
import { getAPIBasePath } from 'src/utils/getBasePath';

export type Action = {
	type: 'FETCH_PATH_INFO',
	path: string;
} | {
	type: 'FETCH_PATH_INFO_DONE',
	path: string,
	file: PathInfo,
} | {
	type: 'FETCH_PATH_INFO_ERROR',
	path: string,
	response: Response,
};

function fetchPathInfo(path: string): Action {
	return {
		type: 'FETCH_PATH_INFO',
		path,
	};
}

function fetchPathInfoDone(path: string, file: PathInfo): Action {
	return {
		type: 'FETCH_PATH_INFO_DONE',
		path,
		file,
	};
}

function fetchPathInfoError(path: string, response: Response): Action {
	return {
		type: 'FETCH_PATH_INFO_ERROR',
		path,
		response,
	};
}

export function getPathInfo(path: string): ThunkAction<void, Store, null, Action> {
	return async (dispatch: ThunkDispatch<Store, null, Action>, getStore) => {
		// TODO: Better error handling, use isSignedIn for auth check
		const authToken = getStore().auth.sessionToken;
		if (!authToken) {
			throw new Error('Unauthorized');
		}
		dispatch(fetchPathInfo(path));
		try {
			const pathInfo = await FileApiFp({ accessToken: authToken }).getPathInfo(path)(undefined, getAPIBasePath());
			dispatch(fetchPathInfoDone(path, pathInfo));
		} catch (response) {
			dispatch(fetchPathInfoError(path, response));
		}
	};
}
