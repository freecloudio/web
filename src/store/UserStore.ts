import { observable, autorun } from 'mobx';
import { User, UserApi } from '../api';
import { Log } from '../Log';
import { authStore } from './AuthStore';

export class UserStore {

	@observable public currentUser: User = { firstName: '', lastName: '', ID: -1 };
	@observable public users: { [userID: number]: User } = {};

	private readonly log = new Log('UserStore');
	private userAPI: UserApi; 

	constructor() {
		autorun(() => {
			const l = window.location;
			this.userAPI = new UserApi(authStore.authorizedAPIConfiguration, l.protocol + '//' + l.hostname + ':' + l.port + '/api/v1');
			this.log.debug('Created a new UserApi');
			this.fetchCurrentUser();
		});
	}

	public async getUserByID(id: number): Promise<User> {
		const u = this.users[id];
		if (!u) {
			this.log.debug('Cache miss for user ID ' + id);
			try {
				const usr = await this.userAPI.getUserByID(id);
				this.users[id] = usr;
				return usr;
			} catch (response) {
				if (authStore.checkAuthorizedAPIResponse(response)) {
					this.log.error('Failed to get user, but was authenticated', response);
				}
				throw response;
			}
		}
		return u;
	}

	public async fetchCurrentUser(): Promise<User> {
		try {
			this.currentUser = await this.userAPI.getCurrentUser();
			return this.currentUser;
		} catch (response) {
			if (authStore.checkAuthorizedAPIResponse(response)) {
				this.log.error('Failed to get current user, but was authorized', response);
			}
			throw response;
		}
	}
}

export const userStore = new UserStore();
