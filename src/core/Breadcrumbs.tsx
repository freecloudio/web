import "./Breadcrumbs.scss";

import { Link } from "react-router-dom";
import * as React from "react";
import Icon, { IconStyle } from "./Icon";

export interface Part {
  name: string;
  href?: string;
}

interface Props {
  parts: Part[];
}

class Breadcrumbs extends React.Component<Props, object> {
  public render() {
    return (
      <nav className="breadcrumbs">
        { this.props.parts.map((part, idx) => {
          return <span className="breadcrumb-part" key={idx}>
          {
            part.href ? 
              <Link to={part.href}>{ part.name }</Link>
              :
              <span>{part.name}</span>
          }
          { 
            idx < this.props.parts.length - 1 ? 
              <Icon className="icon" name="chevronRight" style={IconStyle.Dark} size={1.5}/>
            :  
              null
          }
          </span>
        })}
      </nav>
    )
  }
}

export default Breadcrumbs;