import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextInput from './TextInput'
import Link from '../Link/Link'
export default {
  title: 'Components/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />

export const Default = Template.bind({})
