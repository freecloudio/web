import { User } from 'src/api';

export interface UserState {
	users: { [userID: number]: User };
	currentUser: User;
}
