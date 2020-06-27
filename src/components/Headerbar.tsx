import React from 'react';
import styled from 'styled-components';
import { File, Calendar, Image, CheckSquare } from 'react-feather';
import IconButton from './IconButton';
import Logo from './Logo';

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
`;

const StyledLogo = styled(Logo)`
	margin-right: 16px;
`;

export default function Headerbar() {
	return (
		<StyledHeaderbar>
			<StyledLogo height="1.5rem" />
			<IconNav>
				<IconButton><File/></IconButton>
				<IconButton><Calendar /></IconButton>
				<IconButton><Image /></IconButton>
				<IconButton><CheckSquare /></IconButton>
			</IconNav>
		</StyledHeaderbar>
	);
};
