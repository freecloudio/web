import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ExtraProps {
	primary?: boolean;
	hasIcon?: boolean;
}

export type ButtonProps = ButtonHTMLAttributes<{}> | ExtraProps;

const Button = styled.button<ExtraProps>`
	display: flex;
	background: ${({ primary }) =>
		primary ? "var(--color-primary)" : "var(--color-background)"};
	color: ${({ primary }) =>
		primary ? "var(--color-text-on-primary)" : "var(--color-text-primary)"};
	border: none;
	border-radius: var(--rounded-lg);
	outline: none;
	appearance: none;
	cursor: pointer;
	padding: ${({ hasIcon }) =>
		hasIcon ? "0.75rem .75rem 0.75rem 2rem" : "0.75rem 2rem"};
	box-shadow: var(--shadow-md);
	box-sizing: border-box;
	font-weight: 600;
	text-align: left;
	font-size: 1.1rem;
	width: auto;
	align-items: center;
	justify-content: ${({ hasIcon }) => (hasIcon ? "space-between" : "center")};
	transition: all 0.1s ease-in-out;
	position: relative;

	&:hover {
		box-shadow: var(--shadow-lg);
	}
`;

export default Button;
