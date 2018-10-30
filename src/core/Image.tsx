import "./Image.scss";
import * as React from "react";
import { Log } from "src/Log";
import { observable } from "mobx";
import { observer } from "mobx-react";

interface Props {
	src: string;
	className?: string;
}

/**
 * The Image component lazy-loads images.
 *
 * The image gets loaded by creating an <img> element (not attached to body)
 * and giving it the desired source. After the image 'load' event fires,
 * we rely on the browser's cache to put the same src into the real <img> element.
 */
@observer
class Image extends React.Component<Props, object> {

	private readonly log = new Log("Image");
	@observable private loaded = false;

	public componentDidMount() {
		this.log.debug(`Loading image '${this.props.src}'`);
		const img = document.createElement("img");
		img.onload = this.onLoad;
		img.src = this.props.src;
	}

	public render() {
		const className = this.props.className || "";
		return (
			<div className={`img ${this.loaded ? "loaded" : "" } ${className}`}>
				{this.loaded ? <img src={this.props.src} /> : null}
			</div>
		);
	}

	private onLoad = () => {
		this.log.debug(`Image ${this.props.src} loaded`);
		this.loaded = true;
	}
}

export default Image;