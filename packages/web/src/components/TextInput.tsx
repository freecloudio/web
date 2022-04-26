import { ChangeEventHandler } from "react";
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

interface StyleProps {
	color?: keyof typeof backgroundMap;
}

interface BaseProps {
	onChange?: ChangeEventHandler<HTMLInputElement>;
	type: InputType;
	value?: string;
}

export type TextInputProps = StyleProps & BaseProps;

const StyledTextInput = styled.input<StyleProps>`
	appearance: none;
	border: none;
	border-radius: var(--rounded-md);
	font-size: var(--font-size-base);
	padding: 0.5rem 1rem;
	background-color: ${({ color }) => backgroundMap[color || "default"]};
	color: ${({ color }) => colorMap[color || "default"]};
`;

const TextInput = (props: TextInputProps) => (
	<StyledTextInput
		onChange={props.onChange ? props.onChange : undefined}
		{...props}
	/>
);

export default TextInput;
