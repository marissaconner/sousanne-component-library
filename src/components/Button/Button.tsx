import React from 'react'
import classNames from 'classnames'
import Style from '../design/Style'
import '../design/Style.css'
import './Button.css'


interface ButtonProps {
  /**
   * Button labels should always be in Sentence case.
  */
  label: string
  /**
   * "primary": highlights the next logical step forward.
   * "warning": denotes the button destroys data, e.g. 'delete'.
   * "muted": For coupling with primary buttons as the 'backward' step.
   */
  type?: 'primary' | 'default' | 'muted' | 'warning'
  /**
   * Optional
   */
  disabled?: boolean
  /** 
   * Optional
   */ 
  onClick?: () => void
}

const Button = ({type = 'default', label, disabled, ...props}: ButtonProps) => {
  return(
    <button
      disabled={disabled}
      type={type}
      className={classNames({
        button: true,
        'Disabled': !!disabled,
        'Muted': type === 'muted',
        'Primary': type ==='primary',
        'Warning': type === 'warning'
      })}
    >
      {label}
    </button>
  )
}

export default Button