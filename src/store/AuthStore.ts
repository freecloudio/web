import { Log } from "../Log";
import { computed, observable } from "mobx";

const AUTH_TOKEN_KEY = "fc-token";

export class AuthStore {

	@observable private authToken: string | null;
	private readonly log = new Log("AuthStore");

	constructor() {
		this.authToken = localStorage.getItem(AUTH_TOKEN_KEY);
	}

	@computed public get isSignedIn(): boolean {
		return this.authToken !== null;
	}

	public async signIn(email: string, password: string): Promise<void> {
		this.log.info("Signing in");
		return new Promise<void>((resolve, reject) => {
			window.setTimeout(() => {
				this.setAuthToken("testtoken");
				this.log.debug("Signin successful, token is", this.authToken);
				resolve();
			}, Math.random() * 500 + 200);
		});
	}

	private setAuthToken(token: string) {
		localStorage.setItem(AUTH_TOKEN_KEY, token);
		this.authToken = token;
	}

}

export const authStore = new AuthStore();
