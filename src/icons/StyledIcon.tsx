import styled from "styled-components";

const sizeMap = {
	xs: "1rem",
	sm: "1.125rem",
	md: "1.25rem",
	lg: "1.5rem",
	xl: "1.75rem",
	"2xl": "2rem",
};

interface ExtraProps {
	size?: keyof typeof sizeMap;
}

export type StyledIconProps = ExtraProps;

export const StyledIcon = styled.svg<ExtraProps>`
	width: ${({ size }) => sizeMap[size || "md"]};
	height: ${({ size }) => sizeMap[size || "md"]};
`;
