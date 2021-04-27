import styled from "styled-components";

const IconButton = styled.button<{ toggled?: boolean }>`
  display: inline-flex;
  background: ${({ toggled }) =>
    toggled ? "var(--color-background-alt)" : "transparent"};
  color: ${({ toggled }) =>
    toggled ? "var(--color-primary)" : "hsl(var(--palette-gray-00))"};
  border: none;
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  outline: none;
  appearance: none;
  cursor: pointer;
  box-sizing: border-box;
  font-family: inherit;
  font-weight: inherit;
  text-align: left;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: var(--color-background-alt);
  }
`;

export default IconButton;
