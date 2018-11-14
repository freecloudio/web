import { Log } from "../Log";
import { computed, observable } from "mobx";
import { AuthApi, User, Configuration } from "src/api";

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
	private authAPI: AuthApi;

	constructor() {
		this.authToken = localStorage.getItem(AUTH_TOKEN_KEY);
		// In case there was a token already, use it
		this.authAPI = this.makeAuthAPI(this.authorizedAPIConfiguration);
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
	 * getAuthorizedAPIConfiguration returns a Configuration object containing the current auth token.
	 * This should be used by other stores making calls to the API, to ensure that this store is the SPOT
	 * considering the auth token.
	 * @returns {Configuration} A Configuration object containing the auth token.
	 */
	@computed public get authorizedAPIConfiguration(): Configuration {
		return {
			accessToken: this.authToken || "",
		};
	}

	/**
	 * signIn does a request to the server to sign in with the provided data.
	 * The returned Promise will resolve, once the request was successful.
	 * The Promise rejects on unsuccessful network requests or invalid credentials.
	 * @param {string} email the user's email address
	 * @param {string} password the user's plaintext password
	 */
	public async login(email: string, password: string): Promise<void> {
		this.log.info("Signing in");
		const tkn = await this.authAPI.login({email, password});
		if (!tkn.token) {
			throw new AuthError("token is empty");
		}
		this.setAuthToken(tkn.token);
		// Create a new AuthApi object with the authorized configuration
		this.authAPI = this.makeAuthAPI(this.authorizedAPIConfiguration);
		this.log.debug("Login successful, token is", tkn.token);
	}

	/**
	 * signUp creates a new user account and a session for that user.
	 * @param {string} firstName the user's first name
	 * @param {string} lastName the user's last name
	 * @param {string} email the user's email. No further validation is done before sending it to the server.
	 * @param {string} password the user's password in cleartext. No further validation is done before sending it to the server.
	 */
	public async signUp(firstName: string, lastName: string, email: string, password: string) {
		this.log.info("Signing up");
		const usr: User = {firstName, lastName, email, password};
		const tkn = await this.authAPI.signup(usr);
		if (!tkn.token) {
			throw new AuthError("token is empty");
		}
		this.setAuthToken(tkn.token);
		// Create a new AuthApi object with the authorized configuration
		this.authAPI = this.makeAuthAPI(this.authorizedAPIConfiguration);
		this.log.debug("Signup successful, token is", tkn.token);
	}

	/**
	 * signOut ends the current active session by sending a sign out request to the server
	 * (which invalidates the current session token), as well as deleting it from localStorage.
	 * The result of the sign out request is not accounted for, as tokens should be extremely hard to guess (if not impossible),
	 * so deleting it from the client should also suffice (old sessions are discarded by the server at some point anyway).
	 */
	public async signOut() {
		this.log.info("Signing out");
		this.setAuthToken(null);
		try {
			await this.authAPI.logout();
		} catch (err) {
			this.log.warn("Logout failed, still deleting token");
		}
		this.authAPI = this.makeAuthAPI();
	}

	/**
	 * setAuthToken writes the given auth token to localStorage and the internal
	 * authToken variable.
	 * @param {(string | null)} token the new auth token
	 */
	private setAuthToken(token: string | null) {
		if (!token) {
			localStorage.removeItem(AUTH_TOKEN_KEY);
		} else {
			localStorage.setItem(AUTH_TOKEN_KEY, token);
		}
		this.authToken = token;
	}

	private makeAuthAPI(configuration?: Configuration): AuthApi {
		const l = window.location;
		return new AuthApi(configuration, l.protocol + "//" + l.hostname + ":" + l.port + "/api/v1");
	}

}

export const authStore = new AuthStore();
