import styled from 'styled-components';

import FlexBox from '../../components/FlexBox';
import FilesSidebar from './FilesSidebar';
import Spinner from '../../components/Spinner';

const Container = styled(FlexBox)`
	padding-top: 2rem;
	width: 100%;
	height: 100%;
`;


function Files() {
	return (
		<Container>
			<FilesSidebar />
			<main>
				<Spinner />
			</main>
		</Container>
	)
}

export default Files;
