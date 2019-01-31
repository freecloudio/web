import "./Button.scss";
import * as React from "react";

export enum ButtonStyle {
	Dark,
	Light,
	Primary,
	PrimaryInverted,
}

export interface Props {
	style?: ButtonStyle;
	onClick: ButtonClickHandler;
	className?: string;
}

type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const StyleClasses = {
	[ButtonStyle.Dark]: "dark",
	[ButtonStyle.Light]: "light",
	[ButtonStyle.Primary]: "primary",
	[ButtonStyle.PrimaryInverted]: "primary-inverted",
};

const Button: React.FunctionComponent<Props> = ({children, style, onClick, className}) => {
	const styleClass = StyleClasses[style || ButtonStyle.Dark];

	function preventDefault(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		onClick(event);
	}

	return (
		<button className={`btn ${styleClass}${className ? ' ' + className : ''}`} onClick={preventDefault}>{children}</button>
	);
};

export default Button;
