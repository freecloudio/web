import './FileApp.scss';

import * as React from "react";
import Sidebar from "./Sidebar";
import FileList from "./FileList";
import { fileStore } from 'src/store/FileStore';
import Breadcrumbs from '../../core/Breadcrumbs';
import TextField, { InputStyle } from 'src/core/TextField';
import { RouteComponentProps } from 'react-router';

interface RouterParams {
  type?: string;
  "0"?: string;
}

interface Props extends RouteComponentProps<RouterParams> {
  // base path of the files app. This is used to generate sub-links like for shared files and trash.
  base: string;
}

class FileApp extends React.Component<Props, object> {

  public render() {
    const type = this.props.match.params.type ? this.props.match.params.type : "d";
    const loc = `Home/${this.props.match.params["0"] ? this.props.match.params["0"] : ""}`;
    
    // Split by slashes, remove all null elements, replace 0th element with "Home",
    // recusively build all other parts
    const breadcrumbs = loc.split("/").filter((part) => !!part).map((part, idx, parts) => 
      idx === 0
      ? { name: "Home", href: `${this.props.base}/${type}`}
      : { name: part, href: `${this.props.base}/${type}${this.breadcrumbsParts(parts.slice(1, idx + 1))}` }
    );

    return (
      <div className="file-app">
        <Sidebar base={this.props.base} />
        <div className="files">
          <div className="files-header">
            <Breadcrumbs parts={breadcrumbs} />
            <TextField style={InputStyle.Dark} />
          </div>
          <FileList base={this.props.base + "/" + type} fileStore={fileStore} currentPath="/" />
        </div>
      </div>
    )
  }

  private breadcrumbsParts = (parts: string[]): string => 
    parts.length <= 0 ? "" : "/" + parts[0] + this.breadcrumbsParts(parts.slice(1));
}

export default FileApp;