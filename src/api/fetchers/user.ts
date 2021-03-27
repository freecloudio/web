import { ApiError } from "../ApiError";

const tokenStorageKey = "fc-token";

export async function userFetcher() {}

export async function mockUserFetcher() {
	// sleep 500ms
	await new Promise((res) => setTimeout(res, 500));

	const token = localStorage.getItem(tokenStorageKey);
	if (token) {
		console.log("Authorized, token is", token);
		// authorized
		return {
			name: "Shu",
			avatar: "https://github.com/shuding.png",
		};
	}

	// not authorized
	console.log("Not authorized");
	const error = new ApiError("Not authorized!");
	error.status = 403;
	throw error;
}
