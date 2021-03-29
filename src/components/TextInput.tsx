import styled from "styled-components";

const backgroundMap = {
	default: "var(--color-background)",
	alt: "var(--color-background-alt)",
	primary: "var(--color-primary)",
};

const colorMap = {
	default: "var(--color-text-secondary)",
	alt: "var(--color-text-secondary)",
	primary: "var(--color-text-on-primary)",
};

/**
 * InputType is a list of all HTML <input> types handled by this component.
 * All other input types (like number, date, ...) are handled by other components.
 */
type InputType = "text" | "email" | "tel" | "password" | "search" | "url";

interface ExtraProps {
	color?: keyof typeof backgroundMap;
	type: InputType;
}

const TextInput = styled.input<ExtraProps>`
	appearance: none;
	border: none;
	border-radius: var(--rounded-md);
	font-size: var(--font-size-base);
	padding: 0.5rem 1rem;
	background-color: ${({ color }) => backgroundMap[color || "default"]};
	color: ${({ color }) => colorMap[color || "default"]};
`;

export default TextInput;
