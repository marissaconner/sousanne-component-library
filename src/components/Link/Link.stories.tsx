import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Link from './Link'

export default {
  title: 'Sousanne/Link',
  component: Link,
  argTypes: {
    children: {
      control: { type: null }
    },
  }
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Default = Template.bind({})
Link.args = {
  children: 'Link',
  inline: false
}

export const InlineLink = Template.bind({})
InlineLink.args = {
  children: 'Link',
  inline: true
}