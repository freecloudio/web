import { lazy, Suspense } from 'react';
import './index.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import apps from './appindex';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';
import FlexBox from './components/FlexBox';

const Files = lazy(() => import('./apps/files/Files'));

const Main = styled.main`
	overflow-x: hidden;
	overflow-y: auto;
	min-height: 100%;
	width: 100%;
`;

const WholeScreenSpinner = () => (
	<FlexBox style={{width: '100%', height: '100%'}} justify="center" items="center">
		<Spinner large />
	</FlexBox>
);

function App() {
	return (
		<Router>
				<Switch>
					<Route path={apps.files.routePrefix}>
						<AppBar />
						<Main>
							<Suspense fallback={<WholeScreenSpinner />}>
								<Files />
							</Suspense>
						</Main>
					</Route>
					<Route path="/">
						<Redirect to={{pathname: apps.files.routePrefix}} />
					</Route>
			</Switch>
		</Router>
	);
}

export default App;
