import "./Avatar.scss";

import * as React from "react";


interface Props {
  imageSrc?: string;
  size?: number;
  name: string;
}

class Avatar extends React.Component<Props, object> {
  
  public render() {
    const { imageSrc, name, size } = this.props;

    return (
      <div className="avatar" style={{width: `${(size || 2)}rem`, height: `${(size || 2)}rem`}}>
        { imageSrc 
        ? <img src={imageSrc}/>
        : <span>{ this.nameInitials(name)}</span>} 
      </div>
    )
  }

  private nameInitials(name: string): string {
    // only accept up to 2 letters
    return name.split(" ").map((part, idx) => idx >= 2 ? "" : part[0].toUpperCase()).join("");
  }

}

export default Avatar;