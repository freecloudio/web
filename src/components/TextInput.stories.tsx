import "../variables.css";
import { Meta } from "@storybook/react";
import Box from "./Box";
import Card from "./Card";
import { default as TextInput } from "./TextInput";

export default {
	title: "Forms/TextInput",
	component: TextInput,
} as Meta;

export const Plain = () => (
	<Card color="alt">
		<Box gap="md">
			<TextInput type="text" />
			<TextInput type="email" />
			<TextInput type="tel" />
			<TextInput type="password" />
			<TextInput type="search" />
			<TextInput type="url" />
		</Box>
	</Card>
);
