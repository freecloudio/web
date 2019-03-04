import { Action } from '../actions';
import { UserState } from 'src/store/userStore';

const initialState: UserState = {
	currentUser: {},
	isCurrentUserLoading: false,
	users: {},
};

export default function userReducer(state: UserState = initialState, action: Action): UserState {
	switch (action.type) {
		case 'FETCH_CURRENT_USER':
			return { ...state, isCurrentUserLoading: true};
		case 'FETCH_CURRENT_USER_DONE':
			return { ...state, isCurrentUserLoading: false, currentUser: action.user };
		case 'FETCH_CURRENT_USER_ERROR':
			// TODO: Error handling
			return { ...state, isCurrentUserLoading: false, currentUser: {} };
		case 'FETCH_USER':
			return { ...state, users: { ...state.users, [action.id]: { isLoading: true }}};
		case 'FETCH_USER_DONE':
			return { ...state, users: { ...state.users, [action.id]: { isLoading: false, ...action.user }}};
		case 'FETCH_USER_ERROR':
			return { ...state, users: { ...state.users, [action.id]: { isLoading: false }}};
		default:
			return state;
	}
}
