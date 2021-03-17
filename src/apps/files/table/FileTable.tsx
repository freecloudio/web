import File from "../models/File";
import FileRow from "./FileRow";
import faker from "faker";
import styled from "styled-components";

function getSharedWith() {
	let sharedWith = [];
	for (let i = 0; i < faker.random.number(4); i++) {
		sharedWith.push(faker.name.findName());
	}
	return sharedWith;
}

// TODO: Move this mock data to a mocked file service
let mockData: File[] = [];
for (let i = 0; i < 20; i++) {
	mockData.push({
		type: faker.random.arrayElement(["directory", "file"]),
		name: faker.system.fileName(),
		size: faker.random.number(),
		starred: faker.random.boolean(),
		lastModified: faker.date.past(),
		id: faker.random.alpha(),
		sharedWith: getSharedWith(),
	});
}

const StyledTable = styled.div`
	color: var(--color-text-secondary);
	overflow-y: auto;
	width: calc(100%);
	height: 100%;
	border-collapse: collapse;
	box-sizing: border-box;
	display: grid;
	grid-template-columns: [icon] 4rem [item] 1fr [shared] max-content [size] max-content [changed] max-content;
	grid-auto-rows: 3.5rem;
	padding: 0 0.5rem;
	align-items: stretch;
`;

const TableHeader = styled.div<{ align: string }>`
	font-size: 0.9rem;
	font-weight: 700;
	text-align: ${(props) => props.align};
	position: sticky;
	top: 0;
	height: 3.5rem;
	box-sizing: border-box;
	background: var(--color-background);
	display: flex;
	align-items: center;
	border-bottom: 1px solid var(--color-filetable-fake-shadow);
`;

const TableHeaderWithPadding = styled(TableHeader)`
	padding-left: 1rem;
`;

const FileTable = () => (
	<StyledTable>
		<TableHeader align="left"></TableHeader>
		<TableHeader align="left">Name</TableHeader>
		<TableHeaderWithPadding align="left">Shared with</TableHeaderWithPadding>
		<TableHeaderWithPadding align="center">Size</TableHeaderWithPadding>
		<TableHeaderWithPadding align="right">Last Changed</TableHeaderWithPadding>
		{mockData.map((f) => (
			<FileRow {...f} key={f.name} />
		))}
	</StyledTable>
);

export default FileTable;
