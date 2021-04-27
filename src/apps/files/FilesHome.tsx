import FileTable from "./table/FileTable";
import Heading from "../../components/Heading";
import RecentFilesGrid from "./recent/RecentFilesGrid";

function FilesHome() {
  return (
    <>
      <Heading level={3} primary>
        Recent Files
      </Heading>
      <RecentFilesGrid />
      <FileTable />
    </>
  );
}

export default FilesHome;
