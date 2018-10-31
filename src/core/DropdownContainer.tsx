import "./DropdownContainer.scss";

import * as React from "react";

interface Props {
	dropdown: JSX.Element;
	className?: string;
}

/**
 * DropdownContainer is an optional wrapper for containing dropdowns and their triggers.
 * It can be used for proper alignment, when you don't want to make the Dropdown
 * a child of its trigger (so styling is not inherited).
 */
class DropdownContainer extends React.Component<Props, object> {

	public render() {
		const classes = ["dropdown-container"];
		if (this.props.className) {
			classes.push(...this.props.className.split(" "));
		}

		return (
			<div className={classes.join(" ")}>
				{this.props.children}
				{this.props.dropdown}
			</div>
		);
	}
}

export default DropdownContainer;
