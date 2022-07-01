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
  label: "Button",
  disabled: false,
  type: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  disabled: false,
  type: "secondary"
};

export const Muted = Template.bind({});
Muted.args = {
  label: "Button",
  disabled: false,
  type: "muted"
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Button",
  disabled: false,
  type: "warning"
};
