import styled from "styled-components";
import Button from "../../components/Button";
import { Plus } from "react-feather";
import SidebarFolderItem from "./SidebarFolderItem";

const UploadButton = styled(Button)`
	margin-left: 32px;
	margin-bottom: 32px;
`;

const StyledAside = styled.aside`
	height: 100vh;
	width: 14rem;
	background: var(--color-background-alt);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 1rem;
	box-sizing: border-box;
`;

const ButtonPlus = styled(Plus)`
	margin-right: 1rem;
	height: 1.5rem;
	width: 1.5rem;
	display: inline-block;
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
`;

const FolderItem = styled.li``;

const FilesSidebar = () => (
	<StyledAside>
		<Title>Storage</Title>
		<Ol>
			<li>
				<TopLevelNavItem active>My files</TopLevelNavItem>
				<ol>
					<SidebarFolderItem>Analytics</SidebarFolderItem>
					<SidebarFolderItem>Assets</SidebarFolderItem>
					<SidebarFolderItem>Marketing</SidebarFolderItem>
				</ol>
			</li>
			<li>
				{" "}
				<TopLevelNavItem>Starred</TopLevelNavItem>{" "}
			</li>
		</Ol>
		<UploadButton primary>
			<ButtonPlus />
			New
		</UploadButton>
	</StyledAside>
);

export default FilesSidebar;
