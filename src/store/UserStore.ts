import { observable, computed } from "mobx";
import * as mgr from "../manager/UserManager";
import { User } from "../models/User";
import { Log } from "../Log";

export class UserStore {

	@observable public currentUser: User = { name: "", id: -1 };
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

	@computed get currentUserInitials(): string {
		if (this.currentUser.name === "") {
			return "";
		}
		return this.currentUser.name.split(" ").map((part, idx) => idx >= 2 ? "" : part[0].toUpperCase()).join("");
	}

	public async fetchCurrentUser(): Promise<void> {
		this.currentUser = await mgr.getCurrentUser();
	}
}

export const userStore = new UserStore();
