import { Log } from "../Log";
import { computed, observable } from "mobx";

// Name of the item in localStoage
const AUTH_TOKEN_KEY = "fc-token";

/**
 * An AuthStore is responsible for storing all authentication-related data in
 * an observable fashion.
 */
export class AuthStore {

	/**
	 * The authToken is what is added to each API request that needs authentication.
	 * It is stored in the localStorage of the browser per default, so one doesn't need
	 * to sign in again every time. On creation of the AuthStore, it is read from 
	 * localStorage.
	 */
	@observable private authToken: string | null;
	private readonly log = new Log("AuthStore");

	constructor() {
		this.authToken = localStorage.getItem(AUTH_TOKEN_KEY);
	}

	/**
	 * isSignedIn returns true, if an auth token is found.
	 * When the AuthStore gets created, it tries to validate that token. However, before
	 * the token could be verified this might return a false-positive true.
	 */
	@computed public get isSignedIn(): boolean {
		return this.authToken !== null;
	}

	/**
	 * signIn does a request to the server to sign in with the provided data.
	 * The returned Promise will resolve, once the request was successful.
	 * When the Promise resolves to true, the provided credentials were correct.
	 * The Promise rejects on unsuccessful network requests.
	 * @param email the user's email address
	 * @param password the user's plaintext password
	 */
	public async signIn(email: string, password: string): Promise<boolean> {
		this.log.info("Signing in");
		return new Promise<boolean>((resolve, reject) => {
			window.setTimeout(() => {
				this.setAuthToken("testtoken");
				this.log.debug("Signin successful, token is", this.authToken);
				resolve(true);
			}, Math.random() * 500 + 200);
		});
	}

	/**
	 * setAuthToken writes the given auth token to localStorage and the internal
	 * authToken variable.
	 * @param token the new auth token
	 */
	private setAuthToken(token: string) {
		localStorage.setItem(AUTH_TOKEN_KEY, token);
		this.authToken = token;
	}

}

export const authStore = new AuthStore();
