import './TextInput.scss';

import * as React from 'react';
import * as classNames from 'classnames';

export enum InputStyle {
	Light,
	Dark,
}

let nextTextFieldID = 0;

interface Props {
	label?: string;
	style?: InputStyle;
	type: 'text' | 'email' | 'password' | 'search';
	autocomplete?: string;
	onChange: (value: string) => void;
	value: string | number;
}

const TextInput = ({label, style, type, autocomplete, onChange, value}: Props) => {
	const id = nextTextFieldID;
	nextTextFieldID++;	

	function onChangeWrapper(event: React.ChangeEvent<HTMLInputElement>) {
		onChange(event.target.value.toString());
	}

	return (
		<div className="inputfield-container">
		{ label ? <label htmlFor={`tf${id}`}>{label}</label> : null }
			<input
				id={`tf${id}`}
				type={type}
				value={value}
				onChange={onChangeWrapper}
				className={classNames('input-field', (style === InputStyle.Light) ? 'light' : 'dark')}
				autoComplete={autocomplete}
			/>
		</div>
	);
};

export default TextInput;
