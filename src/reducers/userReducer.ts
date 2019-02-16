import { Action } from '../actions';
import { UserState } from 'src/store/userStore';

const initialState: UserState = {
	currentUser: {},
	users: {},
};

export default function userReducer(state: UserState = initialState, action: Action): UserState {
	switch (action.type) {
		// TODO: What if the user ID actually does not exist?
		case 'USER_FETCHED':
			return Object.assign({}, state, {
				users: {
					[action.user.ID!]: action.user,
				},
			});
		default:
			return state;
	}
}
