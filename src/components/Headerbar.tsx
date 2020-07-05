import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import Logo from './Logo';
// FIXME: This should be a prop
import apps from '../appindex';
import {Link, useLocation} from 'react-router-dom';
import Avatar from './Avatar';

const StyledHeaderbar = styled.header`
	display: flex;
	background: var(--color-primary);
	color: white;
	width: 100vw;
	height: 4rem;
	line-height: 4rem;
	box-sizing: border-box;
	padding: 0 2rem;
	align-items: center;
`;

const IconNav = styled.nav`
	display: flex;
	align-items: center;
	margin-right: auto;
`;

// TODO: These are shifted down by 1px for some reason
const L = styled.a`
	display: inline-block;
	width: 3rem;
	height: 3rem;
	margin-right: 1rem;
`;

const StyledLogo = styled(Logo)`
	margin-right: 1rem;
	padding-right: .5rem;
`;

export default function Headerbar() {
	const location = useLocation();
	return (
		<StyledHeaderbar>
			<StyledLogo height="1.5rem" />
			<IconNav>
				{ Object.entries(apps).map(([ app, config ]) => (
					<Link to={config.routePrefix} component={L} key={app}>
						<IconButton toggled={location.pathname.startsWith(config.routePrefix)}>
							<config.icon/>
						</IconButton>
					</Link>
				)) }
			</IconNav>
			<Avatar name="John Doe" imageSrc="https://randomuser.me/api/portraits/men/17.jpg"/>
		</StyledHeaderbar>
	);
};
