import styled from 'styled-components';
import Button from '../../components/Button';
import FlexBox from '../../components/FlexBox';
import { Plus } from 'react-feather';

const UploadButton = styled(Button)`
	margin-left: 32px;
	margin-bottom: 32px;
`;

const StyledAside = styled.aside`
	height: 100vh;
	width: 14rem;
	background: var(--color-background-alt);
`;

const ButtonPlus = styled(Plus)`
	margin-right: 1rem;
	height: 1.5rem;
	width: 1.5rem;
	display: inline-block;
`;

const FilesSidebar = () => (
	<StyledAside>
		<FlexBox dir="column">
			<UploadButton primary><ButtonPlus />New</UploadButton>
		</FlexBox>
	</StyledAside>
);

export default FilesSidebar;
