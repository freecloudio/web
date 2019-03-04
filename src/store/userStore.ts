import { User } from 'src/api';

export interface UserState {
	users: { [userID: number]: User & { isLoading: boolean }};
	currentUser: User;
	isCurrentUserLoading: boolean;
}
