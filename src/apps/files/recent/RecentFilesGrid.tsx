import Chance from "chance";
import styled from "styled-components";
import Box from "../../../components/Box";
import File from "../models/File";
import RecentFileCard from "./RecentFileCard";

const chance = new Chance();

const StyledRecentsContainer = styled(Box)`
  height: 8rem;
`;

// TODO: Load the recent files from the server
const files = [
  {
    id: chance.guid({ version: 4 }),
    type: "file",
    name: "Interesting Sales.xlsx",
  },
  { id: chance.guid({ version: 4 }), type: "folder", name: "Documents" },
  {
    id: chance.guid({ version: 4 }),
    type: "file",
    name: "Interesting Sales.xlsx",
  },
  { id: chance.guid({ version: 4 }), type: "folder", name: "Pictures" },
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
