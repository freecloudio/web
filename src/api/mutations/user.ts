// FIXME: These authentication functions are placeholders
const tokenStorageKey = "fc-token";

export async function login() {
	localStorage.setItem(tokenStorageKey, "someTestToken");
}

export async function logout() {
	localStorage.setItem(tokenStorageKey, "");
}
