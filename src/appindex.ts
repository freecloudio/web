import { File, Calendar, Image, CheckSquare } from "react-feather";

const apps = {
	files: {
		routePrefix: "/files",
		icon: File,
	},
	calendar: {
		routePrefix: "/calendar",
		icon: Calendar,
	},
	photos: {
		routePrefix: "/photos",
		icon: Image,
	},
	tasks: {
		routePrefix: "/tasks",
		icon: CheckSquare,
	},
};

export default apps;
