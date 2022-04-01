import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Breadcrumbs } from "../../index";
import "./styles.css";
import { nodesTrail } from "./mock";
import reactRouterDecorator from "../../../.storybook/decorators/react-router";
import chevronRight from "../assets/chevron-right";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    nodes: nodesTrail,
  },
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);

export const Primary = Template.bind({});
Primary.decorators = [reactRouterDecorator];
Primary.args = {
  nodes: nodesTrail,
  separator: "/",
};

export const SVG = Template.bind({});
SVG.decorators = [reactRouterDecorator];
SVG.args = {
  nodes: nodesTrail,
  separator: chevronRight,
};

export const Emoji = Template.bind({});
Emoji.decorators = [reactRouterDecorator];
Emoji.args = {
  nodes: nodesTrail,
  separator: "👉",
};
