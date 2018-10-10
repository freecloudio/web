import './FileApp.scss';

import * as React from "react";
import Sidebar from "./Sidebar";
import FileList from "./FileList";
import { fileStore } from 'src/store/File';
import Breadcrumbs from '../../core/Breadcrumbs';

interface Props {
	// base path of the files app. This is used to generate sub-links like for shared files and trash.
	base: string;
}

class FileApp extends React.Component<Props, object> {

  public render() {
    return (
      <div className="file-app">
        <Sidebar base={this.props.base}/>
        <div className="files">
          <div className="files-header">
            <Breadcrumbs parts={[{ name: "Home", href: "/" }, { name: "Documents", href: "/docs"}]} />
          </div>
          <FileList fileStore={fileStore} currentPath="/"/>
        </div>
      </div>
    )
  }
}

export default FileApp;