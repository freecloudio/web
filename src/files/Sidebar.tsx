import * as React from 'react';

import './Sidebar.scss';

class Sidebar extends React.Component {
	public render() {
		return (
			<aside className="files-sidebar">
				<ul>
					<li>
						<a>Your files</a>
					</li>
				</ul>
			</aside>
		)
	}
}

export default Sidebar;
