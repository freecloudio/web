import * as React from "react";

import * as MDIcon from "@mdi/react";

// TODO: We should only include icons we use. This is for faster development
import * as Icons from "@mdi/js";

export enum IconStyle {
	Dark,
	Light,
	Black,
	White,
}

interface Props {
	name: string;
	size?: number;
	color?: IconStyle;
	className?: string;
}

const IconColors: {[Style in IconStyle]: string} = {
	[IconStyle.Dark]: "rgba(0, 0, 0, 0.81)",
	[IconStyle.Light]: "rgba(255, 255, 255, 0.81)",
	[IconStyle.Black]: "rgba(0, 0, 0, 1)",
	[IconStyle.White]: "rgba(255, 255, 255, 1)",
};

const Icon: React.FunctionComponent<Props> = ({name, size, color, className}) => {
	const iconName = 'mdi' + name.charAt(0).toUpperCase() + name.substr(1); 
	const classes = ['icon'];
	if (className) {
		classes.push(...className.split(' '));
	}
	const iconColor = (color !== undefined) ? IconColors[color] : 'currentColor';
	return (
		<MDIcon.Icon className={classes.join(' ')} path={Icons[iconName]} size={(size || 1) / 1.5} color={iconColor} />
	);
};

export default Icon;
