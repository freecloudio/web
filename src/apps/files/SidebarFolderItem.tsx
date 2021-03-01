import { ReactNode } from "react";
import { FolderOutline } from "@graywolfai/react-heroicons";
import styled from "styled-components";

interface Props {
	children: ReactNode;
}

const StyledLi = styled.li`
	display: flex;
	align-items: center;
	margin: 0.75rem 0 0.75rem 0.5rem;
`;

const StyledLabel = styled.span`
	display: inline-block;
	margin-left: 1rem;
`;

const SidebarFolderItem = ({ children }: Props) => (
	<StyledLi>
		<FolderOutline width="1.5rem" />
		<StyledLabel>{children}</StyledLabel>
	</StyledLi>
);

export default SidebarFolderItem;
