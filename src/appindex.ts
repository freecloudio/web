import {
	DocumentOutline,
	CalendarOutline,
	PhotographOutline,
	CheckCircleOutline,
} from "@graywolfai/react-heroicons";

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
