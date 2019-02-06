import './Popover.scss';
import * as React from 'react';
import * as classNames from 'classnames';

interface Props {
	visible: boolean;
	onClick?: () => void;
	anchor?: 'top' | 'left' | 'right' | 'bottom' | 'below' | 'above' | 'toLeft' | 'toRight';
}

const Popover: React.FunctionComponent<Props> = ({visible, onClick, anchor, children}) => {
	return (
		<div className={classNames('popover', {visible}, anchor || 'below')} onClick={onClick}>
			{ children }	
			{ visible && (<div className="popover-closer" />)}
		</div>
	);
};

export default Popover;
