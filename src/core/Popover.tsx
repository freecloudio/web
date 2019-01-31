import "./Popover.scss";
import * as React from "react";

interface Props {
	visible: boolean;
	onClick?: () => void;
	anchor?: "top" | "left" | "right" | "bottom" | "below" | "above" | "toLeft" | "toRight";
}

const Popover: React.FunctionComponent<Props> = ({visible, onClick, anchor, children}) => {
	const classes = [ 'popover' ];
	if (visible) {
		classes.push('visible');
	}
	classes.push(anchor || 'below');
	return (
		<div className={classes.join(' ')} onClick={onClick}>
			{ children }	
			{ visible && (<div className='popover-closer' />)}
		</div>
	);
};

export default Popover;
