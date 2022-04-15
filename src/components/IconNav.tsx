import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BoxProps, default as Box } from "./Box";
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

const StyledNav = styled(Box)``;

const StyledLink = styled(Link)`
  width: 3rem;
  height: 3rem;
`;

function IconNav({ items, ...props }: ExtraProps) {
  const location = useLocation();
  return (
    <StyledNav as="nav" justify="start" {...props}>
      {items.map((item) => (
        <StyledLink to={item.path} title={item.name} key={item.name}>
          <IconButton toggled={location.pathname.startsWith(item.path)}>
            <item.icon />
          </IconButton>
        </StyledLink>
      ))}
    </StyledNav>
  );
}

export default IconNav;
