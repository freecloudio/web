import Card from "../../../components/Card";
import File from "../models/File";
import Text from "../../../components/Text";
import styled from "styled-components";
import { DocumentOutline, FolderOutline } from "../../../icons";

/**
 * The props for a RecentFileCard are a subtype of the common File model
 */
type Props = {
  type: File["type"];
  name: File["name"];
};

const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background: var(--color-background);
  padding: 0.75rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

const StyledCard = styled(Card)`
  width: 16rem;
  height: auto;
`;

function RecentFileCard({ type, name }: Props) {
  return (
    <StyledCard direction="col" justify="start" align="start" color="alt">
      <IconContainer>
        {type === "file" ? (
          <DocumentOutline size="lg" />
        ) : (
          <FolderOutline size="lg" />
        )}
      </IconContainer>
      <Text>{name}</Text>
    </StyledCard>
  );
}

export default RecentFileCard;
