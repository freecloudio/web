import styled from "styled-components";
import { Colorizable, Sizable } from "../style/modifiers";
import {
	getBackgroundColor,
	getForegroundColor,
	sizes,
	getShadowColor,
} from "../style/utils";

const Button = styled.button<Colorizable & Sizable>`
	display: inline-flex;
	background: ${(props) => getBackgroundColor(props, "--color-light-bg-muted")};
	color: ${(props) => getForegroundColor(props, "--color-dark-text")};
	border: none;
	border-radius: 5px;
	outline: none;
	appearance: none;
	cursor: pointer;
	padding: 0 1rem;
	height: ${(props) => sizes(props, "1.5em", "2.25em", "3em")};
	line-height: ${(props) => sizes(props, "1.5em", "2.25em", "3em")};
	box-shadow: 2px 2px 6px
		${(props) => getShadowColor(props, "--color-dark-text-shadow")};
	font-size: ${(props) => sizes(props, ".75em", "1em", "1.25em")};
	box-sizing: border-box;
	font-family: inherit;
	font-weight: inherit;
	text-align: left;
	width: auto;
	align-items: center;
	transition: all 0.1s ease-in-out;

	&:hover {
		box-shadow: 2px 2px 12px
			${(props) => getShadowColor(props, "--color-dark-text-shadow")};
	}
`;

export default Button;
