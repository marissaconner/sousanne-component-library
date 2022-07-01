import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Sousanne/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  as: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  disabled: false,
  version: "secondary"
};

export const Muted = Template.bind({});
Muted.args = {
  children: "Button",
  disabled: false,
  version: "muted"
};

export const Warning = Template.bind({});
Warning.args = {
  children: "Button",
  disabled: false,
  version: "warning"
};
