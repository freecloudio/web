import styled from "styled-components";
import Box from "../../components/Box";

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
		<Box align="stretch">
			<FilesSidebar />
			<Main>
				<FileTable />
			</Main>
		</Box>
	);
}

export default Files;
