import { combineReducers } from 'redux';
import auth from './authReducer';
import notifications from './notificationReducer';
import users from './userReducer';
import files from './fileReducer';

const rootReducer = combineReducers({
	auth,
	notifications,
	users,
	files,
});

export default rootReducer;
