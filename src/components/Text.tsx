import styled from "styled-components";

const Text = styled.span<{ secondary?: boolean }>`
  color: ${({ secondary }) =>
    secondary ? "var(--color-text-secondary)" : "inherit"};
`;

export default Text;
