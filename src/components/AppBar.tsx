import styled from "styled-components";
import IconButton from "./IconButton";
import Logo from "./Logo";
// FIXME: This should be a prop
import apps from "../appindex";
import { Link, useLocation } from "react-router-dom";
import Avatar from "./Avatar";

const StyledAppBar = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: var(--color-primary);
	color: white;
	height: 100vh;
	width: 5rem;
	line-height: 4rem;
	box-sizing: border-box;
	padding: 1rem 0;
	align-items: center;
`;

const IconNav = styled.nav`
	margin: 0;
	padding: 0;
	width: 100%;
	text-align: center;
`;

// TODO: These are shifted down by 1px for some reason
const L = styled.a`
	width: 3rem;
	height: 3rem;
`;

const LogoContainer = styled.div`
	width: 3rem;
	height: 3rem;
	background: #fff;
	border-radius: 2rem;
	color: var(--color-primary);
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function AppBar() {
	const location = useLocation();
	return (
		<StyledAppBar>
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
			/>
		</StyledAppBar>
	);
}
