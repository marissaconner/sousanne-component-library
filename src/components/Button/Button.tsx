import React from 'react'
import classNames from 'classnames'
import Style from '../design/Style'
import '../design/Style.css'
import './Button.css'


interface ButtonProps {
  children: node
  /**
   * "primary": highlights the next logical step forward.
   * "warning": denotes the button destroys data, e.g. 'delete'.
   * "muted": For coupling with primary buttons as the 'backward' step.
   */
  type?: 'primary' | 'default' | 'muted' | 'warning' | undefined
  /**
   * Optional
   */
  disabled?: boolean
  /** 
   * Optional
   */ 
  onClick?: () => void
  /**
   * Button content
  * */
  /**
   * optional additional styling
  * */
  classes?: string
}

const Button = ({type = 'default', children, classes, disabled, ...props}: ButtonProps) => {
  return(
    <button
      disabled={disabled}
        className={`${classes} ${classNames({
        button: true,
        'Disabled': !!disabled,
        'Muted': type === 'muted',
        'Primary': type ==='primary',
        'Warning': type === 'warning'
      })}`}
    >
      {children}
    </button>
  )
}

export default Button