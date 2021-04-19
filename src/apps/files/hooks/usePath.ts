import { useLocation } from "react-router-dom";
import apps from "../../../appindex";

function normalize(path: string) {
	let normalized = path.startsWith("/") ? path : "/" + path;
	normalized = path.endsWith("/") ? path.slice(0, -1) : path;
	return normalized;
}

/**
 * Returns the file path from the URL
 * The path will always start with a slash (/) but never end with a slash. The only exception is the
 * "root" path, indicated by a single slash (/).
 */
export default function usePath(): { path: string; isDirectory: boolean } {
	const { pathname } = useLocation();
	const fileAppPrefix = apps.files.routePrefix;

	// If the current path doesn't have the file app as a base, we'll want to stop processing
	if (!pathname.startsWith(fileAppPrefix)) {
		return { path: "", isDirectory: false };
	}
	// The root app path resolves to the root directory. This is "syntactic sugar"
	if (pathname === fileAppPrefix) {
		return { path: "/", isDirectory: true };
	}
	const path = normalize(pathname.substring(fileAppPrefix.length + 2));
	const isDirectory = pathname.startsWith(fileAppPrefix + "/d");
	return { path, isDirectory };
}
