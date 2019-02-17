import './Image.scss';
import * as React from 'react';
import { Log } from 'src/Log';
import * as classNames from 'classnames';

interface Props {
	src: string;
	className?: string;
}

const log = new Log('Image');

/**
 * The Image component lazy-loads images.
 *
 * The image gets loaded by creating an <img> element (not attached to body)
 * and giving it the desired source. After the image 'load' event fires,
 * we rely on the browser's cache to put the same src into the real <img> element.
 */
const Image: React.FunctionComponent<Props> = ({ src, className }) => {
	const [loaded, setLoaded] = React.useState(false);

	React.useEffect(() => {
		log.debug(`Loading image '${src}'`);
		const img = document.createElement('img');
		img.onload = onLoad;
		img.src = src;
	}, []);

	const onLoad = () => {
		log.debug(`Image ${src} loaded`);
		setLoaded(true);
	};

	return (
		<div className={classNames('img', className, { loaded })}>
			{loaded ? <img src={src} /> : null}
		</div>
	);
};

export default Image;
