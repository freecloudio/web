import styled from "styled-components";

const sizeMap = {
	md: "2rem",
	lg: "3rem",
	xl: "4rem",
};

interface ExtraProps {
	size?: keyof typeof sizeMap;
}

const StyledLogo = styled.svg<ExtraProps>`
	width: ${({ size }) => sizeMap[size || "md"]};
	height: ${({ size }) => sizeMap[size || "md"]};
`;

const Logo = ({ size }: ExtraProps) => (
	<StyledLogo viewBox="0 0 414 414" fill="currentColor" size={size}>
		<path d="M319.8 155.3H263a24.7 24.7 0 00-24.6 24.7v109.2c.1 24.5-24.2 39.8-46.3 41.2H85.9c-44.5 0-82.7-34.1-84.8-78.5a82.5 82.5 0 0182.4-86.5c4 0 7.8-2.3 9.4-6a123.7 123.7 0 01226.9-4" />
		<path d="M330.9 232.5a15.5 15.5 0 0015.6 15.5H367c14.6 0 26.3 12 25.8 26.7a26.2 26.2 0 01-26.5 24.8H333c-2 0-3.7 1.3-4.4 3.2a41.3 41.3 0 01-39 27.7h-70.7a42.2 42.2 0 0029.5-41.2V180c0-8 6.5-14.6 14.5-14.6h124c14 0 26 11 26.4 25a25.8 25.8 0 01-25.8 26.6h-41.2c-8.6 0-15.5 7-15.5 15.5" />
	</StyledLogo>
);

export default Logo;
