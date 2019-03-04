import './FileApp.scss';

import * as React from 'react';
import Sidebar from './Sidebar';
import { RouteComponentProps, Route } from 'react-router';
import FileListPage from './FileListPage';
import { Log } from 'src/Log';

const log = new Log('FileApp');

const FileApp: React.FunctionComponent<RouteComponentProps> = ({match}) => {
	log.debug('rendering');
	return (
		<div className="file-app">
			<Sidebar />
			<Route path={match.path + '/'} exact component={FileListPage} />
			<Route path={match.path + '/d/*'} exact component={FileListPage} />
			<Route path={match.path + '/shared'} exact component={FileListPage} />
			<Route path={match.path + '/starred'} exact component={FileListPage} />
			<Route path={match.path + '/trash'} exact component={FileListPage} />
		</div>
	);
};

export default FileApp;
