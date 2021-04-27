import styled from "styled-components";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { PlusOutline } from "../../icons";
import SidebarFolderItem from "./SidebarFolderItem";
import Box from "../../components/Box";

const UploadButton = styled(Button)`
  margin-top: auto;
`;

const StyledAside = styled(Box)`
  height: 100vh;
  width: 18rem;
  padding: 1rem 2rem;
`;

const ButtonPlus = styled(PlusOutline)`
  display: block;
  background: var(--color-primary-muted);
  border-radius: var(--rounded-md);
  padding: 0.5rem;
`;

const Ol = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const FolderList = styled.ol`
  margin: 0 0 0.5rem 0;
  padding: 0;
`;

const FilesSidebar = () => (
  <StyledAside as="aside" justify="start" direction="col" align="stretch">
    <Ol>
      <li>
        <Heading level={3} primary>
          My files
        </Heading>
        <FolderList>
          <SidebarFolderItem>Analytics</SidebarFolderItem>
          <SidebarFolderItem>Assets</SidebarFolderItem>
          <SidebarFolderItem>Marketing</SidebarFolderItem>
        </FolderList>
      </li>
      <li>
        <Heading level={3}>Shared with me</Heading>{" "}
      </li>
      <li>
        <Heading level={3}>Starred</Heading>{" "}
      </li>
      <li>
        <Heading level={3}>Deleted</Heading>{" "}
      </li>
    </Ol>
    <UploadButton primary hasIcon>
      <span>Create new</span>
      <ButtonPlus />
    </UploadButton>
  </StyledAside>
);

export default FilesSidebar;
