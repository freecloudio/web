import './Button.scss';
import * as React from 'react';

export type ButtonStyle = 'dark' | 'light' | 'primary' | 'primary-inverted' | 'positive' | 'negative';

export interface Props {
	// Changes the appearance of the button. Will default to 'dark'
	style?: ButtonStyle;
	onClick: ButtonClickHandler;
	className?: string;
}

type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const Button: React.FunctionComponent<Props> = ({children, style, onClick, className}) => {
	function preventDefault(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		onClick(event);
	}

	return (
		<button className={`btn ${style || 'dark'}${className ? ' ' + className : ''}`} onClick={preventDefault}>{children}</button>
	);
};

export default Button;
