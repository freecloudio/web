import "./Avatar.scss";

import * as React from "react";

interface Props {
	imageSrc?: string;
	size?: number;
	name: string;
	onClick?: (event: React.MouseEvent) => void;
}

const Avatar: React.FunctionComponent<Props> = ({imageSrc, size, name, onClick}) => {
	const s = size || 2;
	return (
		<div className="avatar" style={{ width: `${s}rem`, height: `${s}rem` }} onClick={onClick}>
			{ imageSrc ? <img src={imageSrc} /> : <span>{name}</span> }
		</div>
	);
};

export default Avatar;
