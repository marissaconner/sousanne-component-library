import React from 'react'
import classNames from 'classnames'
import '../../design/Style.css'
import FormLabel from '../FormLabel/FormLabel'
import FormField from '../FormField/FormField'

export interface TextInputProps {
  /**
   * The ID is used to specify the label
  */
  id: string
  /** 
   * Optional additional styling
  */
  classes?: string
  /** 
   * A disabled TextInput renders, but is not interactable.
  */
  disabled?: boolean
  /**
   * Determine which state to render the input box in.
   */
  state?: 'default' | 'valid' | 'error'
  placeholderText?: string
}

const TextInput = ({
  id,
  classes = '',
  disabled = false,
  placeholderText = 'Placeholder',
  state,
  ...props
}: TextInputProps) => {
  return(
    <FormField>
      <FormLabel
        htmlFor={id}
      >
        Label Text
      </FormLabel>
      <input
        id={id}
        type="text"
        state={state}
        disabled={disabled}
        placeholder={placeholderText}
        className={`form-field_control ${classes} ${classNames({
          'Disabled': disabled,
          'Valid' : state === 'valid',
          'Error' : state === 'error'
        })}`}
      />
    </FormField>
  )
}

export default TextInput