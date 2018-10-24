import "./Button.scss";
import * as React from "react";

export enum ButtonStyle {
	Dark,
	Light,
	Primary,
}

export interface Props {
	text: string;
	style?: ButtonStyle;
	onClick: ButtonClickHandler;
}

type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const StyleClasses = {
	[ButtonStyle.Dark]: "dark",
	[ButtonStyle.Light]: "light",
	[ButtonStyle.Primary]: "primary",
};

class Button extends React.Component<Props, object> {
	constructor(props: Props) {
		super(props);
	}

	public render() {
		const { text } = this.props;
		const style = StyleClasses[this.props.style || ButtonStyle.Dark];

	 return (
			<button className={`btn ${style}`} onClick={this.onClick}>{text}</button>
		);
	}

	private onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		this.props.onClick(event);
	}
}

export default Button;
