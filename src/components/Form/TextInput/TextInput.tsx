import React from 'react'
import classNames from 'classnames'
import '../../design/Style.css'
import FormField from '../FormField/FormField'

export interface TextInputProps {
  /**
   * Specify the unique ID of the input
  */
  id: string
  labelText: string
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
  /**
   * Give the user additional instructions for assistance
  */
  helperText?: string
}

const TextInput = ({
  id,
  classes = '',
  disabled = false,
  helperText,
  labelText = 'Label',
  placeholderText = 'Placeholder',
  state,
  ...props
}: TextInputProps) => {
  return(
    <FormField>
      <label
        class='form-field_label'
        htmlFor={id}>
        {labelText}
      </label>
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
      { helperText ? 
        <p class="form-field_helpertext">
          {helperText}
        </p>
        :
        ''
      }
    </FormField>
  )
}

export default TextInput