import { ReactNode } from "react";
import styled from "styled-components";

const justifyMap = {
	start: "flex-start",
	end: "flex-end",
	center: "center",
	between: "space-between",
	around: "space-around",
	evenly: "space-evenly",
};

const alignMap = {
	start: "flex-start",
	end: "flex-end",
	center: "center",
	stretch: "stretch",
	baseline: "baseline",
};

type flexWrap = undefined | true | false | "reverse";

function wrapMap(wrap: flexWrap) {
	if (wrap === true) {
		return "wrap";
	}
	if (wrap === "reverse") {
		return "wrap-reverse";
	}
	return "no-wrap";
}

const gapMap = {
	none: 0,
	xs: ".25rem",
	sm: ".5rem",
	md: ".75rem",
	lg: "1rem",
	xl: "1.25rem",
	"2xl": "1.5rem",
};

const dirMap = {
	row: "row",
	col: "column",
	rrow: "row-reverse",
	rcol: "column-reverse",
};

interface ExtraProps {
	children?: ReactNode;
	align?: keyof typeof alignMap;
	justify?: keyof typeof justifyMap;
	wrap?: flexWrap;
	direction?: keyof typeof dirMap;
	gap?: keyof typeof gapMap;
	shrink?: boolean | number;
	grow?: boolean | number;
}

export type BoxProps = ExtraProps;

const Box = styled.div<ExtraProps>`
	display: flex;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	align-items: ${(props) => alignMap[props.align || "center"]};
	justify-content: ${(props) => justifyMap[props.justify || "center"]};
	flex-wrap: ${(props) => wrapMap(props.wrap)};
	flex-direction: ${(props) => dirMap[props.direction || "row"]};
	gap: ${(props) => gapMap[props.gap || "none"]};
	flex-shrink: ${({ shrink }) =>
		shrink ? (typeof shrink === "number" ? shrink : 1) : 0};
	flex-grow: ${({ grow }) => (!grow ? 0 : typeof grow === "number" ? grow : 1)};
`;

export default Box;
