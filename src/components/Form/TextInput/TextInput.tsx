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
   * If something should be rendered with a default value, put it here.
   */
  defaultValue?: string | number
  /** 
   * A disabled TextInput renders, but is not interactable.
  */
  disabled?: boolean
  /**
   * Give the user additional instructions for assistance
  */
  helperText?: string
  /**
  * Specify a placeholder value.
  */
  placeholderText?: string
  /**
   * Give a specific error message for form validation.
   */
  errorText?: string
  /**
   * Determine which status to render the input box in.
  */
  status?: 'default' | 'valid' | 'error'
}

const showHelperText = function (...props) {
  if (props.status === 'error') {
    return !props.errorText // Prefer error text over helper text when present
  }
  return !!props.helperText
}

const TextInput = ({
  id,
  classes = '',
  defaultValue,
  disabled = false,
  errorText = 'Please review your input.',
  helperText,
  labelText = 'Label',
  placeholderText = 'Placeholder',
  status,
  ...props
}: TextInputProps) => {
  
  return(
    <FormField
      classes={classNames({
        'Disabled': disabled,
        'Error': status === 'error'
      })}
    >
      <label
        class="form-field_label"
        htmlFor={id}
      >
        {labelText}
      </label>
      <input
        id={id}
        type="text"
        defaultValue={defaultValue}
        status={status}
        disabled={disabled}
        placeholder={placeholderText}
        className={`form-field_control ${classes} ${classNames({
          'Valid' : status === 'valid',
          'Error' : status === 'error'
        })}`.trim()}
      />
      { helperText || status === 'error' ?
        <p class="form-field_helpertext">
          {status === 'error' ? errorText : helperText }
        </p>
        :
        ''
      }
    </FormField>
  )
}

export default TextInput