import { addDecorator } from "@storybook/react";
import React from "react";
import Layout from "./Layout";
addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);
