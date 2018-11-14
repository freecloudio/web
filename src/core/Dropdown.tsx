import "./Dropdown.scss";
import * as React from "react";

interface Props {
	visible: boolean;
	onClick?: () => void;
	anchor?: "top" | "left" | "right" | "bottom" | "below" | "above" | "toLeft" | "toRight";
}

class Dropdown extends React.Component<Props, object> {
	public render() {
		const classes = ["dropdown"];
		if (this.props.visible) {
			classes.push("visible");
		}
		classes.push(this.props.anchor ? this.props.anchor : "below");

		return (
			<div className={classes.join(" ")} onClick={this.props.onClick}>
				{this.props.children}
				{ 
					this.props.visible && 
					<div className="dropdown-closer"/>
				}
			</div>
		);
	}

}

export default Dropdown;
