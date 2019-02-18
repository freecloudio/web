export function isUnauthorized(response: Response) {
	return response.status === 401;
}

export function isForbidden(response: Response) {
	return response.status === 403;
}

