import React from 'react'
import classNames from 'classnames'
import '../../design/Style.css'

export interface TextInputProps {
  /** 
   * Optional additional styling
  * */
  classes?: string
  /** 
   * A disabled TextInput renders, but is not interactable.
  * */
  disabled?: boolean
}

const TextInput = ({
  classes,
  disabled = false,
  ...props
}: TextInputProps) => {
  return(
    <input
      type="text"
      disabled={disabled}
      className={`unordered-list ${classes} ${classNames({
        'Disabled': disabled
      })}`}
    />
  )
}

export default TextInput