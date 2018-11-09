import "./InputField.scss";

import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

export enum InputStyle {
	Light,
	Dark,
}

let nextTextFieldID = 0;

interface Props {
	label?: string;
	style: InputStyle;
	type: "text" | "number" | "email" | "password" | "tel" | "search";
	autocomplete?: string;
	onChange?: (value: string) => void;
}

@observer
class InputField extends React.Component<Props, object> {
	@observable private value: string = "";

	private readonly id: number;

	constructor(props: Props) {
		super(props);
		this.onInput = this.onInput.bind(this);
		this.id = nextTextFieldID;
		nextTextFieldID++;
	}

	public render() {
		return (
			<div className="inputfield-container">
			{ this.props.label ?
				<label htmlFor={`tf${this.id}`}>{this.props.label}</label>
					:
				null }
				<input
					id={`tf${this.id}`}
					type={this.props.type}
					value={this.value}
					onChange={this.onInput}
					className={`input-field ${this.props.style === InputStyle.Dark ? "dark" : "light"}`}
					autoComplete={this.props.autocomplete}
				/>

			</div>
		);
	}

	private onInput(event: React.FormEvent<HTMLInputElement>) {
		this.value = event.currentTarget.value;
		if (this.props.onChange) {
			this.props.onChange(this.value);
		}
	}
}

export default InputField;
