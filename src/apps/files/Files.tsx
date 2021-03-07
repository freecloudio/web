import styled from "styled-components";

import FlexBox from "../../components/FlexBox";
import FilesSidebar from "./FilesSidebar";
import FileTable from "./table/FileTable";

const Main = styled.main`
	background: var(--color-background);
	flex: 1;
	height: 100vh;
	overflow: hidden;
	padding: 0 1rem;
`;

function Files() {
	return (
		<FlexBox>
			<FilesSidebar />
			<Main>
				<FileTable />
			</Main>
		</FlexBox>
	);
}

export default Files;
