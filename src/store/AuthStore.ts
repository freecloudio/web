import { Log } from "../Log";
import { computed, observable } from "mobx";
import { AuthApi, User } from "src/api";

// Name of the item in localStoage
const AUTH_TOKEN_KEY = "fc-token";

export class AuthError extends Error {
	constructor(public msg: string) {
		super(msg);
	}
}

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
	private readonly authAPI = new AuthApi(undefined, "localhost:8080");

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
	 * The Promise rejects on unsuccessful network requests or invalid credentials.
	 * @param email the user's email address
	 * @param password the user's plaintext password
	 */
	public async signIn(email: string, password: string): Promise<void> {
		this.log.info("Signing in");
		const tkn = await this.authAPI.login({email, password});
		if (!tkn.token) {
			throw new AuthError("token is empty");
		}
		this.setAuthToken(tkn.token);
		this.log.debug("Signin successful, token is", tkn.token);
	}

	/**
	 * 
	 */
	public async signUp(firstName: string, lastName: string, email: string, password: string) {
		this.log.info("Signing up");
		const usr: User = {firstName, lastName, email, password};
		const tkn = await this.authAPI.signup(usr);
		if (!tkn.token) {
			throw new AuthError("token is empty");
		}
		this.setAuthToken(tkn.token);
		this.log.debug("Signup successful, token is", tkn.token);
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
