import FileRow from "./FileRow";
import styled from "styled-components";
import usePath from "../hooks/usePath";
import useDirectoryContent from "../hooks/useDirectoryContent";

const StyledTable = styled.div`
  overflow-y: auto;
  width: calc(100%);
  height: 100%;
  border-collapse: collapse;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: [icon] 4rem [item] 1fr [shared] max-content [size] max-content [changed] max-content;
  grid-auto-rows: 3.5rem;
  padding: 0 0.5rem;
  align-items: stretch;
`;

const TableHeader = styled.div<{ align: string }>`
  font-size: 0.9rem;
  font-weight: 700;
  text-align: ${(props) => props.align};
  position: sticky;
  top: 0;
  height: 3.5rem;
  box-sizing: border-box;
  background: var(--color-background);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-filetable-fake-shadow);
`;

const TableHeaderWithPadding = styled(TableHeader)`
  padding-left: 1rem;
`;

function FileTable() {
  const { path } = usePath();
  // TODO: Handle the loading state with a skeleton screen
  const { loading, files } = useDirectoryContent(path);

  return (
    <StyledTable>
      <TableHeader align="left"></TableHeader>
      <TableHeader align="left">Name</TableHeader>
      <TableHeaderWithPadding align="left">Shared with</TableHeaderWithPadding>
      <TableHeaderWithPadding align="center">Size</TableHeaderWithPadding>
      <TableHeaderWithPadding align="right">
        Last Changed
      </TableHeaderWithPadding>
      {files?.map((f) => (
        <FileRow {...f} key={f.name} />
      ))}
    </StyledTable>
  );
}

export default FileTable;
