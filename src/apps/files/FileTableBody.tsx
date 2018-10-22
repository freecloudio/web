import { File, Directory } from "src/models/File";
import * as React from "react";
import Icon, { IconStyle } from "src/core/Icon";

interface Props {
  files: Array<File | Directory>
}

class FileTableBody extends React.Component<Props, object> {
  public render() {
    return (
    <tbody>
      {this.props.files.map((f, i) =>
        <tr key={i}>
          <td><Icon name={('children' in f) ? "folderOutline" : "fileOutline"} size={1.5} style={IconStyle.Dark}/>{f.name}</td>
          <td>{f.ownerName ? f.ownerName : "..."}</td>
          <td>{f.size}</td>
        </tr>
      )}
    </tbody>
    )
  }
}

export default FileTableBody;