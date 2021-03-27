import { Story, Meta } from "@storybook/react";

import { default as Avatar, AvatarProps } from "./Avatar";

export default {
	title: "Visualization/Avatar",
	component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const WithName = Template.bind({});
WithName.args = {
	name: "Tyrell Johnson",
};

export const WithImage = Template.bind({});
WithImage.args = {
	name: "Tyrell Johnson",
	imageSrc: "https://github.com/freecloudio.png",
};
