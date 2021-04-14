import {useLocation} from "react-router-dom";
import apps from "../../../appindex";

export default function usePath() {
	const location = useLocation();

	// If the current path doesn't have the file app as a base, we'll want to stop processing
	if (!location.pathname.startsWith(apps.files.routePrefix)) {
		return undefined;
	}
	if (location.pathname === apps.files.routePrefix) {
		return "/";
	}
	return location.pathname.substring(apps.files.routePrefix.length);
}
