import { ReactNode } from "react";
import styled from "styled-components";

// TODO: Increase heading size & margin based on level
const StyledHeading = styled.h4<{ primary?: boolean }>`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ primary }) =>
    primary ? "var(--color-primary)" : "var(--color-text-primary)"};
  display: inline-block;
  margin: 0.5rem 0;
`;

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  primary?: boolean;
  children?: ReactNode;
};

function Heading({ level, ...props }: Props) {
  // FIXME: There are weird type errors with 'as' being a string
  const as = `h${level}` as any;
  return <StyledHeading {...as} {...props} />;
}

export default Heading;
