import styled from 'styled-components';

import FlexBox from '../../components/FlexBox';
import FilesSidebar from './FilesSidebar';
import Spinner from '../../components/Spinner';

const Main = styled.main`
	background: var(--color-background);
	flex: 1;
	height: 100vh;
	overflow: hidden;
`;


function Files() {
	return (
		<FlexBox>
			<FilesSidebar />
			<Main>
				<Spinner />
			</Main>
		</FlexBox>
	)
}

export default Files;
