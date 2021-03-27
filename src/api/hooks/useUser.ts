import useSWR from "swr";
import { ApiError } from "../ApiError";

import { mockUserFetcher } from "../fetchers/user";

export default function useUser() {
	const { data, mutate, error } = useSWR<any, ApiError>(
		"/api/users/0",
		mockUserFetcher
	);

	const loading = !data && !error;
	const loggedOut = error && error.status === 403;

	return {
		loading,
		loggedOut,
		user: data,
		mutate,
	};
}
