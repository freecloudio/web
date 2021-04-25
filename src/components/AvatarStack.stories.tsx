import { Meta } from "@storybook/react";

import Avatar from "./Avatar";
import AvatarStack from "./AvatarStack";

export default {
  title: "Visualization/AvatarStack",
  component: AvatarStack,
} as Meta;

export const Default = () => (
  <AvatarStack>
    <Avatar name="Tyrell Johnson" />
    <Avatar name="Kumar Imbala" />
    <Avatar name="Daniel Groß" />
    <Avatar name="John Freedman" />
  </AvatarStack>
);

export const SmallAvatars = () => (
  <AvatarStack>
    <Avatar small name="Tyrell Johnson" />
    <Avatar small name="Kumar Imbala" />
    <Avatar small name="Daniel Groß" />
    <Avatar small name="John Freedman" />
  </AvatarStack>
);
