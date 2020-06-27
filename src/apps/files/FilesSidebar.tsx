import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import FlexBox from '../../components/FlexBox';

const UploadButton = styled(Button)`
	margin-left: 32px;
	margin-bottom: 32px;
`;

const StyledAside = styled.aside`
	height: 100%;
	width: 14rem;
`

const FilesSidebar: React.FC = () => (
	<StyledAside>
		<FlexBox dir="column">
			<UploadButton primary>New</UploadButton>
		</FlexBox>
	</StyledAside>
);

export default FilesSidebar;
