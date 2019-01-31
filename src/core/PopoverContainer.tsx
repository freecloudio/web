import "./PopoverContainer.scss";

import * as React from "react";

interface Props {
	popover: JSX.Element;
	className?: string;
}

/**
 * PopoverContainer is an optional wrapper for containing dropdowns and their triggers.
 * It can be used for proper alignment, when you don't want to make the Dropdown
 * a child of its trigger (so styling is not inherited).
 */
const PopoverContainer: React.FunctionComponent<Props> = ({ popover, className, children }) => {
	return (
		<div className={`popover-container${className ? ' ' + className : ''}`}>
			{ popover }
			{ children }
		</div>
	);
};

export default PopoverContainer;
