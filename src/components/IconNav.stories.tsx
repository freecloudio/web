import { CheckOutline, XCircleOutline } from "@graywolfai/react-heroicons";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { NavItem, IconNavProps, default as IconNavC } from "./IconNav";

const items: NavItem[] = [
	{
		path: "#",
		name: "Test1",
		icon: CheckOutline,
	},
	{
		path: "#",
		name: "Test2",
		icon: XCircleOutline,
	},
];

export default {
	title: "Controls/IconNav",
	component: IconNavC,
} as Meta;

const Template: Story<IconNavProps> = (args) => (
	<BrowserRouter>
		<IconNavC {...args} />
	</BrowserRouter>
);

export const IconNav = Template.bind({});
IconNav.args = {
	items,
};
