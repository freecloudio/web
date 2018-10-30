import "./Button.scss";
import * as React from "react";

export enum ButtonStyle {
	Dark,
	Light,
	Primary,
}

export interface Props {
	text?: string;
	style?: ButtonStyle;
	onClick: ButtonClickHandler;
	className?: string;
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
		const { text, children } = this.props;
		const style = StyleClasses[this.props.style || ButtonStyle.Dark];

		const classes = ["btn"];
		classes.push(style);
		if (this.props.className) {
			this.props.className.split(" ").forEach((cls) => {
				classes.push(cls);
			});
		}

		return (
			<button className={classes.join(" ")} onClick={this.onClick}>{ children ? children : text }</button>
		);
	}

	private onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		this.props.onClick(event);
	}
}

export default Button;
