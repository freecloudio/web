import { Story, Meta } from "@storybook/react";

import { default as Avatar, AvatarProps } from "./Avatar";
import Box from "./Box";

export default {
  title: "Visualization/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const WithName = () => (
  <Box gap="md">
    <Avatar name="Tyrell Johnson" />
    <Avatar name="Kumar Imbala" />
    <Avatar name="Daniel Groß" />
    <Avatar name="John Freedman" />
  </Box>
);

export const WithImage = Template.bind({});
WithImage.args = {
  name: "Tyrell Johnson",
  imageSrc: "https://github.com/freecloudio.png",
};
