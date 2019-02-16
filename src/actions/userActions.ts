import { User } from 'src/api';

export interface Action {
	type: 'USER_FETCHED';
	user: User;
}
