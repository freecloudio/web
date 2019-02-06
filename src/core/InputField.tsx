import './InputField.scss';

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
	type: 'text' | 'number' | 'email' | 'password' | 'tel' | 'search';
	autocomplete?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string | number;
}

const InputField = ({label, style, type, autocomplete, onChange, value}: Props) => {
	const id = nextTextFieldID;
	nextTextFieldID++;	

	return (
		<div className="inputfield-container">
		{ label ? <label htmlFor={`tf${id}`}>{label}</label> : null }
			<input
				id={`tf${id}`}
				type={type}
				value={value}
				onChange={onChange}
				className={classNames('input-field', (style === InputStyle.Light) ? 'light' : 'dark')}
				autoComplete={autocomplete}
			/>
		</div>
	);
};

export default InputField;
