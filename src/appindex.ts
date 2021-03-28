import {
	DocumentOutline,
	CalendarOutline,
	PhotographOutline,
	CheckCircleOutline,
} from "./icons";

const apps = {
	files: {
		routePrefix: "/files",
		icon: DocumentOutline,
	},
	calendar: {
		routePrefix: "/calendar",
		icon: CalendarOutline,
	},
	photos: {
		routePrefix: "/photos",
		icon: PhotographOutline,
	},
	tasks: {
		routePrefix: "/tasks",
		icon: CheckCircleOutline,
	},
};

export default apps;
