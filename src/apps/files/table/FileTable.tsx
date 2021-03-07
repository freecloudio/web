import FileRow, { Props as FTProps } from "./FileRow";
import faker from "faker";
import styled from "styled-components";

// TODO: Don't use the Prop interface directly, move this to a model
let mockData: FTProps[] = [];

for (let i = 0; i < 20; i++) {
	mockData.push({
		type: faker.random.arrayElement(["directory", "file"]),
		name: faker.system.fileName(),
		size: faker.random.number(),
		starred: faker.random.boolean(),
		lastModified: faker.date.past(),
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
	grid-template-columns: [icon] 4rem [item] 1fr [size] max-content [changed] max-content;
	grid-auto-rows: 3.5rem;
	padding: 0 0.5rem;
	align-items: stretch;
`;

const TableHeader = styled.span<{ align: string }>`
	font-size: 0.9rem;
	font-weight: 700;
	text-align: ${(props) => props.align};
`;

const FileTable = () => (
	<StyledTable>
		<span></span>
		<TableHeader align="left">Name</TableHeader>
		<TableHeader align="left">Size</TableHeader>
		<TableHeader align="left">Last Changed</TableHeader>
		{mockData.map((f) => (
			<FileRow {...f} key={f.name} />
		))}
	</StyledTable>
);

export default FileTable;
