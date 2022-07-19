import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Modal',
  isOpen: false,
  heading: 'Modal Example'
}