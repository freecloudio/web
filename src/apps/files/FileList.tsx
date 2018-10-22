import "./FileList.scss";

import * as React from "react";
import { FileStore } from "src/store/FileStore";
import { observer } from "mobx-react";
import { observable } from "mobx";
import FileTableBody from "./FileTableBody";

interface Props {
  fileStore: FileStore;
  currentPath: string;
}

@observer
class FileList extends React.Component<Props, object> {

  @observable private listScrolled: boolean = false;

  constructor(props: Props) {
    super(props);
    this.onTableScrolled = this.onTableScrolled.bind(this);
  }

  public componentDidMount() {
    this.props.fileStore.fetchCurrentDirectory(this.props.currentPath);
  }

  public render() {
    return (
      <div className="file-list">
        <div className={`file-table-shadow-shim${this.listScrolled ? " scrolled" : ""}`}/>
        <div className="file-table-wrapper" onScroll={this.onTableScrolled}>
          <table className="file-table">
            <thead>
              <tr>
                <th>Name<span>Name</span></th>
                <th>Owner<span>Owner</span></th>
                <th>Size<span>Size</span></th>
              </tr>
            </thead>
            <FileTableBody files={this.props.fileStore.currentDirectoryContent}/>
            </table>
        </div>
      </div>
    )
  }

  private onTableScrolled(event: React.UIEvent): void {
    if (!event.nativeEvent.srcElement) {
      return
    }
    if (event.nativeEvent.srcElement.scrollTop > 0) {
      this.listScrolled = true;
    } else {
      this.listScrolled = false;
    }
  };
}

export default FileList;