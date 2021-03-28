import "../variables.css";
import { Meta } from "@storybook/react";

import { default as Card } from "./Card";
import Box from "./Box";

export default {
	title: "Layout/Card",
	component: Card,
} as Meta;

export const Elevations = () => (
	<Box gap="md">
		<Card elevation={0}>Hello !</Card>
		<Card elevation={1}>Hello !</Card>
		<Card elevation={2}>Hello !</Card>
		<Card elevation={3}>Hello !</Card>
	</Box>
);

export const Colors = () => (
	<Box gap="md">
		<Card color="default">Hello !</Card>
		<Card color="alt">Hello !</Card>
		<Card color="primary">Hello !</Card>
	</Box>
);
