import "./FileList.scss";

import * as React from "react";
import { FileStore } from "src/store/File";
import { observer } from "mobx-react";

interface Props {
  fileStore: FileStore;
  currentPath: string;
}

interface State {
  scrollShadow: boolean;
}

@observer
class FileList extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.onTableScrolled = this.onTableScrolled.bind(this);
    this.state = { scrollShadow: false };
  }

  public componentDidMount() {
    this.props.fileStore.fetchCurrentDirectory(this.props.currentPath);
  }

  public shouldComponentUpdate(nextProps: Props, nextState: State) {
    if (nextState.scrollShadow !== this.state.scrollShadow ||
        nextProps.fileStore !== this.props.fileStore || 
        nextProps.currentPath !== this.props.currentPath) {
      return true;
    }
    return false;
  }

  public render() {
    return (
      <div className="file-list">
        <div className={`file-table-shadow-shim${this.state.scrollShadow ? " scrolled" : ""}`}/>
        <div className="file-table-wrapper" onScroll={this.onTableScrolled}>
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

  private onTableScrolled(event: React.UIEvent): void {
    if (!event.nativeEvent.srcElement) {
      return
    }
    if (event.nativeEvent.srcElement.scrollTop > 0) {
      this.setState({ scrollShadow: true });
    } else {
      this.setState({ scrollShadow: false });
    }
  };
}

export default FileList;