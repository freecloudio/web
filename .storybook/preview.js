import { themes } from "@storybook/theming";
import "!style-loader!css-loader!./../src/variables.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	darkMode: {
		// Override the default dark theme
		dark: { ...themes.dark, appBg: "hsl(216, 38.5%, 11.5%)" },
		// Override the default light theme
		light: { ...themes.normal, appBg: "hsl(216, 38.5%, 97.5%)" },
		darkClass: "theme-dark",
		lightClass: "theme-light",
		stylePreview: true,
	},
};
