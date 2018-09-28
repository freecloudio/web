import * as React from 'react';

import './MainSidebar.scss';

import logo from './res/img/logo_white_nopadding.svg';

class MainSidebar extends React.Component {
	public render() {
		return (
			<header className="mainsidebar">
				<section className="top">
					<img className="logo" src={logo}/>
				</section>
				<section className="bottom">
					<span>v1.0.0</span>
				</section>
			</header>
		)
	}
}

export default MainSidebar;
