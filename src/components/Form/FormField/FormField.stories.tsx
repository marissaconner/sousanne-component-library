import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormField from './FormField'
export default {
  title: 'Components/FormField',
  component: FormField,
} as ComponentMeta<typeof FormField>

const Template: ComponentStory<typeof FormField> = (args) => <FormField {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <span>Fill out later!</span>
}