import styled from "styled-components";

const AvatarStack = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;

  > *:not(:first-child) {
    margin-right: -0.65rem;
  }
`;

export default AvatarStack;
