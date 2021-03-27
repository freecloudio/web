import styled from "styled-components";
import IconButton from "./IconButton";
import Logo from "./Logo";
// FIXME: This should be a prop
import apps from "../appindex";
import { Link, useLocation } from "react-router-dom";
import Avatar from "./Avatar";
import { logout } from "../api/mutations/user";
import useUser from "../api/hooks/useUser";
import Box from "./Box";

const StyledAppBar = styled(Box)`
	background: var(--color-primary);
	color: var(--color-text-on-primary);
	height: 100vh;
	width: 5rem;
	line-height: 4rem;
	padding: 1rem 0;
`;

const IconNav = styled.nav`
	margin: 0;
	padding: 0;
	width: 100%;
	text-align: center;
`;
const LogoContainer = styled(Box)`
	width: 3rem;
	height: 3rem;
`;

const LogoContainer = styled.div`
	width: 3rem;
	height: 3rem;
	background: #fff;
	background: var(--color-text-on-primary);
	border-radius: 2rem;
	color: var(--color-primary);
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function AppBar() {
	const location = useLocation();
	const { mutate } = useUser();
	async function onAvatarClicked() {
		await logout();
		mutate();
	}
	return (
		<StyledAppBar direction="col" as="header" justify="between">
			<LogoContainer>
				<Logo height="2rem" />
			</LogoContainer>
			<IconNav>
				{Object.entries(apps).map(([app, config]) => (
					<Link to={config.routePrefix} component={L} key={app}>
						<IconButton
							toggled={location.pathname.startsWith(config.routePrefix)}
						>
							<config.icon />
						</IconButton>
					</Link>
				))}
			</IconNav>
			<Avatar
				name="John Doe"
				imageSrc="https://randomuser.me/api/portraits/men/17.jpg"
				onClick={onAvatarClicked}
			/>
		</StyledAppBar>
	);
}
