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

type IconColorsDictionary = {[Style in IconStyle]: string};

const IconColors: IconColorsDictionary = {
	[IconStyle.Dark]: "rgba(0, 0, 0, 0.81)",
	[IconStyle.Light]: "rgba(255, 255, 255, 0.81)",
	[IconStyle.Black]: "rgba(0, 0, 0, 1)",
	[IconStyle.White]: "rgba(255, 255, 255, 1)",
};

class Icon extends React.Component<Props, object> {
	public render() {
		const iconName = "mdi" + this.props.name.charAt(0).toUpperCase() + this.props.name.substr(1);
		const classes = [ "icon" ];
		if (this.props.className) {
			classes.push(...this.props.className.split(" "));
		}

		const color = (this.props.color !== undefined) ? IconColors[this.props.color] : "currentColor";

		return (
			<MDIcon.Icon className={classes.join(" ")} path={Icons[iconName]} size={(this.props.size || 1) / 1.5} color={color}/>
		);
	}
}

export default Icon;
