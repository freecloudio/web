import Box from "../../../components/Box";
import styled from "styled-components";
import File from "../models/File";
import RecentFileCard from "./RecentFileCard";
import { datatype } from "faker";

const StyledRecentsContainer = styled(Box)`
  height: 8rem;
`;

// TODO: Load the recent files from the server
const files = [
  { id: datatype.uuid(), type: "file", name: "Interesting Sales.xlsx" },
  { id: datatype.uuid(), type: "folder", name: "Documents" },
  { id: datatype.uuid(), type: "file", name: "Interesting Sales.xlsx" },
  { id: datatype.uuid(), type: "folder", name: "Pictures" },
] as File[];

function RecentFilesGrid() {
  return (
    <StyledRecentsContainer justify="start" gap="md">
      {files.map((file) => (
        <RecentFileCard key={file.id} {...file} />
      ))}
    </StyledRecentsContainer>
  );
}

export default RecentFilesGrid;
