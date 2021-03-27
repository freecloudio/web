import { FolderOutline, DocumentOutline } from "@graywolfai/react-heroicons";
import styled from "styled-components";
import Avatar from "../../../components/Avatar";

export interface Props {
	type: "directory" | "file";
	name: string;
	size: number;
	sharedWith?: string[];
	starred: boolean;
	lastModified?: Date;
}

function iconForType(type: Props["type"]) {
	if (type === "directory") {
		return <FolderOutline width={24} />;
	}
	return <DocumentOutline width={24} />;
}

// TODO: display: contents is not widely supported yet. Search for polyfills
const StyledRow = styled.div`
	display: contents;

	:hover > * {
		background: var(--color-background-alt);
		border-bottom: 3px solid var(--color-filetable-fake-shadow);
	}
`;

const StyledTd = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	border-bottom: 3px solid var(--color-background);
	transition: all 0.1s ease;
	box-sizing: border-box;
`;

const StyledColumnWithPadding = styled(StyledTd)`
	padding-left: 1rem;
`;

const IconTd = styled(StyledTd)`
	justify-content: center;
	border-radius: var(--rounded-md) 0 0 var(--rounded-md);
`;

const LastColumn = styled(StyledColumnWithPadding)`
	border-radius: 0 var(--rounded-md) var(--rounded-md) 0;
	display: flex;
	justify-content: flex-end;
	padding-right: 1.5rem;
`;

function lastModifiedAt(date: Date): string {
	return `${date.getDay()}.${date.getMonth() + 1}.`;
}

const FileRow = ({
	type,
	name,
	size,
	sharedWith,
	starred,
	lastModified,
}: Props) => (
	<StyledRow>
		<IconTd>{iconForType(type)}</IconTd>
		<StyledTd>{name}</StyledTd>
		<StyledColumnWithPadding>
			{sharedWith?.length
				? sharedWith.map((username) => (
						<Avatar key={username} small name={username} />
				  ))
				: null}
		</StyledColumnWithPadding>
		<StyledColumnWithPadding>{size} B</StyledColumnWithPadding>
		<LastColumn>{lastModified ? lastModifiedAt(lastModified) : "-"}</LastColumn>
	</StyledRow>
);

export default FileRow;
