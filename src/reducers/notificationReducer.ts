import { Action } from '../actions';
import { NotificationState } from 'src/store/notificationStore';

const initialState: NotificationState = {
	notifications: [],
};

export default function authReducer(state: NotificationState = initialState, action: Action): NotificationState {
	switch (action.type) {
		case 'SEND_NOTIFICATION':
			return Object.assign({}, state, {
				notifications: [...state.notifications, {text: action.text, type: action.notificationType}],
			});
		default:
			return state;
	}
}
