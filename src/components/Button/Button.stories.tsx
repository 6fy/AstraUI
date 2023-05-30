import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const ghost = Template.bind({});
ghost.args = {
  children: "Button",
  variant: "ghost",
};

export const text = Template.bind({});
text.args = {
  children: "Button",
  variant: "text",
};

export const circle = Template.bind({});
circle.args = {
  children: "+",
  variant: "circle",
};
