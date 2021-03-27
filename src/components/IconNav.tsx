import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { default as Box, BoxProps } from "./Box";
import IconButton from "./IconButton";

export type NavItem = {
	path: string;
	name: string;
	icon: Function;
};

interface ExtraProps extends BoxProps {
	items: NavItem[];
}

export type IconNavProps = ExtraProps;

const StyledNav = styled(Box)`
	background: var(--color-primary);
`;

const StyledLink = styled.a`
	width: 3rem;
	height: 3rem;
`;

function IconNav({ items, ...props }: ExtraProps) {
	const location = useLocation();
	return (
		<StyledNav as="nav" {...props}>
			{items.map((item) => (
				<Link
					to={item.path}
					component={StyledLink}
					title={item.name}
					key={item.name}
				>
					<IconButton toggled={location.pathname.startsWith(item.path)}>
						<item.icon />
					</IconButton>
				</Link>
			))}
		</StyledNav>
	);
}

export default IconNav;
