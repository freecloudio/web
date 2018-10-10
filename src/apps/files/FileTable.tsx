import * as React from "react";
import { Directory, FileSize } from "../../models/files";

const currentFolder: Directory =  {
  name: "/",
  children: [
    {
      name: "Hello",
      size: new FileSize(123123),
      created: new Date(),
      modified: new Date(),
      ownerID: 123,
    },
  ],
  size: new FileSize(123123),
}

class FileTable extends React.Component {

    public render() {
      return (
        <table className="file-table">
          { currentFolder.children.map((child, i) => 
            <tr key={i.toString()}>
              <td>{child.name}</td>
              <td>{child.size.toString()}</td>
            </tr> 
          )} 
        </table>
      )
    }


}
export default FileTable;