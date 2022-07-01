import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UList from './UList'

export default {
  title: 'Components/UList',
  component: UList,
  // argTypes: {
  //   children: {
  //     control: { type: null }
  //   },
  // }
} as ComponentMeta<typeof UList>

const Template: ComponentStory<typeof UList> = (args) => <UList {...args} />

const children = (
  <>
    <li>Hamburgefontsiv</li>
    <li>Handgloves</li>
    <li>Hamburger</li>
  </>)

export const Default = Template.bind({})
Default.args = {
  children: children
}
