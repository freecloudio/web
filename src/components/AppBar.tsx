import styled from "styled-components";
import Logo from "./Logo";
// FIXME: This should be a prop
import apps from "../appindex";
import Avatar from "./Avatar";
import { logout } from "../api/mutations/user";
import useUser from "../api/hooks/useUser";
import Box from "./Box";
import IconNav from "./IconNav";

const StyledAppBar = styled(Box)`
	background: var(--color-primary);
	color: var(--color-text-on-primary);
	height: 100vh;
	width: 5rem;
	line-height: 4rem;
	padding: 1rem 0;
`;

const LogoContainer = styled(Box)`
	width: 3rem;
	height: 3rem;
	background: var(--color-text-on-primary);
	border-radius: 2rem;
	color: var(--color-primary);
`;

const appNavItems = Object.entries(apps).map(([app, config]) => ({
	name: app,
	path: config.routePrefix,
	icon: config.icon,
}));

export default function AppBar() {
	const { mutate } = useUser();
	async function onAvatarClicked() {
		await logout();
		mutate();
	}
	return (
		<StyledAppBar direction="col" as="header" justify="between">
			<LogoContainer>
				<Logo />
			</LogoContainer>
			<IconNav direction="col" items={appNavItems} gap="xl" shrink />
			<Avatar
				name="John Doe"
				imageSrc="https://randomuser.me/api/portraits/men/17.jpg"
				onClick={onAvatarClicked}
			/>
		</StyledAppBar>
	);
}
