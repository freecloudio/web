import * as React from 'react';

export enum ButtonStyle {
	Dark,
	Light
}

export interface Props {
	text: string;
	style?: ButtonStyle;
}

class Button extends React.Component<Props, object> {
	constructor(props: Props) {
		super(props);
	}
  public render() {
		const { text } = this.props;
		const { style } = this.props || ButtonStyle.Dark;

		const buttonClasses = [ 'button' ];

		if (style === ButtonStyle.Light) {
			buttonClasses.push('light');
		}

    return (
			<button className={buttonClasses.join(' ')}>{text}</button>
    );
  }
}

export default Button;
