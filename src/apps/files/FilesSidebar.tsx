import styled from "styled-components";
import Button from "../../components/Button";
import { PlusOutline } from "@graywolfai/react-heroicons";
import SidebarFolderItem from "./SidebarFolderItem";
import Box from "../../components/Box";

const UploadButton = styled(Button)`
	margin-top: auto;
`;

const StyledAside = styled(Box)`
	height: 100vh;
	width: 18rem;
	background: var(--color-background-alt);
	padding: 1rem 2rem;
`;

const ButtonPlus = styled(PlusOutline)`
	height: 1.25rem;
	width: 1.25rem;
	display: block;
	background: var(--color-primary-muted);
	border-radius: var(--rounded-md);
	padding: 0.5rem;
`;

const Title = styled.h1`
	line-height: 3rem;
	margin: 0;
	font-size: 1.5rem;
	font-weight: 700;
	color: var(--color-text-primary);
`;

const Ol = styled.ol`
	list-style-type: none;
	margin: 2rem 0 0 0;
	padding: 0;
`;

const TopLevelNavItem = styled.span<{ active?: boolean }>`
	font-size: 1.25rem;
	font-weight: 600;
	color: ${(props) =>
		props.active ? "var(--color-primary)" : "var(--color-text-primary)"};
	display: inline-block;
	margin: 0.5rem 0;
`;

const FolderList = styled.ol`
	margin: 0 0 0.5rem 0;
	padding: 0;
	color: var(--color-text-secondary);
`;

const FilesSidebar = () => (
	<StyledAside justify="start" direction="col" align="stretch">
		<Title>Storage</Title>
		<Ol>
			<li>
				<TopLevelNavItem active>My files</TopLevelNavItem>
				<FolderList>
					<SidebarFolderItem>Analytics</SidebarFolderItem>
					<SidebarFolderItem>Assets</SidebarFolderItem>
					<SidebarFolderItem>Marketing</SidebarFolderItem>
				</FolderList>
			</li>
			<li>
				<TopLevelNavItem>Shared with me</TopLevelNavItem>{" "}
			</li>
			<li>
				<TopLevelNavItem>Starred</TopLevelNavItem>{" "}
			</li>
			<li>
				<TopLevelNavItem>Deleted</TopLevelNavItem>{" "}
			</li>
		</Ol>
		<UploadButton primary hasIcon>
			<span>Create new</span>
			<ButtonPlus />
		</UploadButton>
	</StyledAside>
);

export default FilesSidebar;
