import "./TextField.scss";

import * as React from "react";

export enum InputStyle {
  Light,
  Dark,
}

let nextTextFieldID = 0;

interface State {
  value: string;
}

interface Props {
  label?: string;
  style: InputStyle;
}

class TextField extends React.Component<Props, State> {
  private readonly id: number;

  constructor(props: Props) {
    super(props);
    this.onInput = this.onInput.bind(this);
    this.state = {value: ""};
    this.id = nextTextFieldID;
    nextTextFieldID++;
  }

  public get value(): string {
    return this.state.value;
  }

  public render() {
    return (
      <div className="textfield-container">
      { this.props.label ? 
        <label htmlFor={`tf${this.id}`}>{this.props.label}</label>
         : 
        null }
      <input id={`tf${this.id}`} type="text" value={this.state.value} onChange={this.onInput}
        className={`text-field ${this.props.style === InputStyle.Dark ? "dark": "light"}`}/>

      </div>
    )
  }

  private onInput(event: React.FormEvent<HTMLInputElement>) {
    this.setState({value: event.currentTarget.value});
  }
}

export default TextField;