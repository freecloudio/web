import './Breadcrumbs.scss';

import { Link } from 'react-router-dom';
import * as React from 'react';
import Icon, { IconStyle } from './Icon';
import { Log } from '../Log';

export interface Part {
	name: string;
	href?: string;
}

interface Props {
	parts: Part[];
}

const log = new Log('Breadcrumbs');

const Breadcrumbs: React.FunctionComponent<Props> = ({parts}) => {
	log.debug('Rendering with parts: ', parts);
	return (
		<nav className="breadcrumbs">
			{ parts.map((part, idx) =>
				<span className="breadcrumb-part" key={idx}>
					{ part.href ? <Link to={part.href}>{part.name}</Link> : <span>{part.name}</span> }	
					{ (idx < parts.length - 1) && (<Icon className="icon" name="chevronRight" color={IconStyle.Dark} size={1.5} />) }
				</span>)}
		</nav>
	);
};

export default Breadcrumbs;
