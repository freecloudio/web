import './Avatar.scss';

import * as React from 'react';

interface Props {
	imageSrc?: string;
	size?: number;
	firstName: string;
	lastName: string;
	onClick?: (event: React.MouseEvent) => void;
}

const Avatar: React.FunctionComponent<Props> = ({imageSrc, size, firstName, lastName, onClick}) => {
	const s = size || 2;
	const fn = (firstName[0] || '').toUpperCase();
	const ln = (lastName[0] || '').toUpperCase();
	return (
		<div className="avatar" style={{ width: `${s}rem`, height: `${s}rem` }} onClick={onClick}>
			{ imageSrc ? <img src={imageSrc} /> : <span>{fn}{ln}</span> }
		</div>
	);
};

export default Avatar;
