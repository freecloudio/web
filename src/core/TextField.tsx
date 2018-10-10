import * as React from "react";

export enum InputStyle {
  Light,
  Dark,
}

interface Props {
  label?: string;
  style: InputStyle;
}

class TextField extends React.Component<Props, object> {
  public render() {
    return (
      <input type="text"/>
    )
  }
}

export default TextField;