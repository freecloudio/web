import { Avatar, Logo } from "@freecloudio/components";
import styled from "styled-components";
import useUser from "../api/hooks/useUser";
import { logout } from "../api/mutations/user";
// FIXME: This should be a prop
import apps from "../appindex";
import Box from "./Box";
import IconNav from "./IconNav";

const StyledAppBar = styled(Box)`
  color: var(--color-text-on-primary);
  width: 100vw;
  height: 5rem;
  padding: 1rem 2rem;
`;

const LogoContainer = styled(Box)`
  width: 3rem;
  height: 3rem;
  background: var(--color-text-on-primary);
  border-radius: 2rem;
  color: var(--color-primary);
  margin-right: 2rem;
`;

const appNavItems = Object.entries(apps).map(([app, config]) => ({
  name: app,
  path: "/apps/" + config.routePrefix,
  icon: config.icon,
}));

export default function AppBar() {
  const { mutate } = useUser();
  async function onAvatarClicked() {
    await logout();
    mutate(null);
  }

  return (
    <StyledAppBar as="header" justify="between">
      <Logo />
      <IconNav items={appNavItems} gap="sm" shrink />
      <Avatar
        name="John Doe"
        img="https://randomuser.me/api/portraits/men/17.jpg"
      />
    </StyledAppBar>
  );
}
