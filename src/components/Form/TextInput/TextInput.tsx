import React from 'react'
import classNames from 'classnames'
import '../../design/Style.css'
import FormLabel from '../FormLabel/FormLabel'

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
}

const TextInput = ({
  id,
  classes,
  disabled = false,
  ...props
}: TextInputProps) => {
  return(
    <>
      <FormLabel htmlFor={id}>Label Text</FormLabel>
      <input  
        type="text"
        disabled={disabled}
        className={`unordered-list ${classes} ${classNames({
          'Disabled': disabled
        })}`}
      />
    </>
  )
}

export default TextInput