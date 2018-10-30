import Button from "./Button";
import * as Btn from "./Button";
import * as React from "react";
import Icon, { IconStyle } from "./Icon";

interface Props {
	iconName: string;
}

class IconButton extends React.Component<Props & Btn.Props> {
	public render() {
		return (
			<Button className="icon-button" onClick={this.props.onClick} children={
				<div>
					<Icon name={this.props.iconName} style={IconStyle.Dark}/>
					<span>{this.props.text}</span>
				</div>
			}/>
		);
	}
}

export default IconButton
