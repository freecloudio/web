import { Meta } from "@storybook/react";
import styled from "styled-components";

import { BoxProps, default as BoxC } from "./Box";

export default {
	title: "Layout/Box",
	component: BoxC,
} as Meta;

const Child = styled.div<{ x: number; y: number }>`
	background-color: hotpink;
	width: ${(props) => props.x * 25}px;
	height: ${(props) => props.y * 25}px;
	margin: 10px;
	border-radius: 5px;
	border: 3px solid turquoise;
`;

export const Box = (args: BoxProps) => (
	<BoxC {...args}>
		<Child x={5} y={3} />
		<Child x={3} y={2} />
		<Child x={4} y={4} />
		<Child x={2} y={6} />
		<Child x={6} y={3} />
	</BoxC>
);
