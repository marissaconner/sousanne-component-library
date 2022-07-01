import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
  disabled: false,
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  disabled: false,
  look: 'primary'
}

export const Muted = Template.bind({})
Muted.args = {
  children: 'Button',
  disabled: false,
  look: 'muted'
}

export const Warning = Template.bind({})
Warning.args = {
  children: 'Button',
  disabled: false,
  look: 'warning'
}
