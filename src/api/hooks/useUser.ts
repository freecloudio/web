import useSWR from "swr";
import { ApiError } from "../ApiError";

import { mockUserFetcher } from "../fetchers/user";

export default function useUser() {
	console.log("useUser: calling again");
	const { data, mutate, error } = useSWR<any, ApiError>(
		"/api/user",
		mockUserFetcher,
		{
			revalidateOnFocus: false,
			refreshInterval: 0,
			// This disables looping on "403 unauthorized"
			// TODO: Find a way to auto-retry but don't do so on 403 and 401
			shouldRetryOnError: false,
		}
	);

	const loading = !data && !error;
	const loggedOut = error && error.status === 403;

	console.log("useUser:", JSON.stringify({ loading, loggedOut, user: data }));

	return {
		loading,
		loggedOut,
		user: data,
		mutate,
	};
}
