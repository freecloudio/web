import "./FileList.scss";

import * as React from "react";
import { FileStore } from "src/store/File";
import { observer } from "mobx-react";

interface Props {
  fileStore: FileStore;
  currentPath: string;
}

@observer
class FileList extends React.Component<Props, object> {

  public componentDidMount() {
    this.props.fileStore.fetchCurrentDirectory(this.props.currentPath);
  }

  public render() {
    return (
      <div className="file-list">
        <div className="file-table-wrapper">
          <table className="file-table">
            <thead>
              <tr>
                <th>Name<span>Name</span></th>
                <th>Size<span>Size</span></th>
              </tr>
            </thead>
            <tbody>
              {this.props.fileStore.currentDirectoryContent.map((f, i) =>
                <tr key={i}>
                  <td>{f.name}</td>
                  <td>{f.size}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default FileList;