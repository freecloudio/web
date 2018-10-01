import './FileApp.scss';

import * as React from "react";
import Sidebar from "./Sidebar";

interface Props {
	// base path of the files app. This is used to generate sub-links like for shared files and trash.
	base: string;
}

class FileApp extends React.Component<Props, object> {

  public render() {
    return (
      <div className="file-app">
        <Sidebar base={this.props.base}/>
        <div className="files"/>
      </div>
    )
  }
}

export default FileApp;