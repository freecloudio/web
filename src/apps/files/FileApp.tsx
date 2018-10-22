import './FileApp.scss';

import * as React from "react";
import Sidebar from "./Sidebar";
import FileList from "./FileList";
import { fileStore } from 'src/store/FileStore';
import Breadcrumbs from '../../core/Breadcrumbs';
import TextField, { InputStyle } from 'src/core/TextField';
import { RouteComponentProps } from 'react-router';
import { Log } from 'src/Log';

interface RouterParams {
  type?: string;
  "0"?: string;
}

interface Props extends RouteComponentProps<RouterParams> {
  // base path of the files app. This is used to generate sub-links like for shared files and trash.
  base: string;
}

class FileApp extends React.Component<Props, object> {
  private readonly log = new Log("FileApp");

  public render() {
    const type = this.props.match.params.type ? this.props.match.params.type : "d";
    const loc = this.props.match.params["0"] ? this.props.match.params["0"] : "/";
    this.log.debug("Rendering", type, loc, this.props.match);

    return (
      <div className="file-app">
        <Sidebar base={this.props.base} />
        <div className="files">
          <div className="files-header">
            <Breadcrumbs parts={[{ name: "Home", href: "/" }, { name: "Documents", href: "/docs" }]} />
            <TextField style={InputStyle.Dark} />
          </div>
          <FileList fileStore={fileStore} currentPath="/" />
        </div>
      </div>
    )
  }
}

export default FileApp;