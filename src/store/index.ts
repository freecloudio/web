import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { AuthState } from './authStore';
import { NotificationState } from './notificationStore';
import { UserState } from './userStore';
import rootReducer from 'src/reducers';
import thunkMiddleware from 'redux-thunk';
import { FileState } from './fileStore';

export interface Store {
	auth: AuthState;
	notifications: NotificationState;
	users: UserState;
	files: FileState;
}

export default function configureStore() {
	let initialState;
	const authToken = localStorage.getItem('fc-token');
	if (authToken) {
		initialState = {
			auth: {
				sessionToken: authToken,
				isSignedIn: true,
			},
		};
	}

	const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(
			applyMiddleware(thunkMiddleware),
		),
	);

	store.subscribe(() => {
		localStorage.setItem('fc-token', store.getState().auth.sessionToken);
	});

	return store;
}
