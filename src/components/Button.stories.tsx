import "../variables.css";
import { Story, Meta } from "@storybook/react";

import { default as Button, ButtonProps } from "./Button";

export default {
	title: "Controls/Button",
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	children: "Primary",
};
