import { observable } from "mobx";
import * as mgr from "../manager/UserManager";
import { User } from "../api";
import { Log } from "../Log";

export class UserStore {

	@observable public currentUser: User = { firstName: '', lastName: '', ID: -1 };
	@observable public users: { [userID: number]: User } = {};

	private readonly log = new Log("UserStore");

	constructor() {
		this.fetchCurrentUser();
	}

	public async getUserByID(id: number): Promise<User> {
		const u = this.users[id];
		if (!u) {
			this.log.debug("Cache miss for user ID " + id);
			const usr = await mgr.getUserByID(id);
			this.users[id] = usr;
			return usr;
		}
		return u;
	}

	public async fetchCurrentUser(): Promise<void> {
		this.currentUser = await mgr.getCurrentUser();
	}
}

export const userStore = new UserStore();
