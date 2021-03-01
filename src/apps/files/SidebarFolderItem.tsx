import { ReactNode } from 'react'
import { Folder } from 'react-feather'
import styled from 'styled-components';

interface Props {
	children: ReactNode
}

const StyledLi = styled.li`
	display: flex;
	align-items: center;
`;

const SidebarFolderItem = ({children}: Props) => (
	<StyledLi><Folder /><span>{children}</span></StyledLi>
);

export default SidebarFolderItem
