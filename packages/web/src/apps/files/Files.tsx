import styled from "styled-components";
import Box from "../../components/Box";

import FilesSidebar from "./FilesSidebar";
import usePath from "./hooks/usePath";
import FilesHome from "./FilesHome";

const Main = styled.main`
  background: var(--color-background);
  flex: 1;
  height: 100vh;
  overflow: hidden;
  padding: 1rem 0rem;
`;

function Files() {
  const { path } = usePath();
  console.log("Current path is:", path);
  return (
    <Box align="stretch">
      <FilesSidebar />
      <Main>
        <FilesHome />
      </Main>
    </Box>
  );
}

export default Files;
