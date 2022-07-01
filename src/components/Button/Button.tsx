import React from 'react'
import classNames from 'classnames'
import Style from '../design/Style'
import '../design/Style.css'
import './Button.css'

export interface ButtonProps {
  /**
   * Button content.
   */
  children: React.ReactNode
  /**
   * "primary": highlights the next logical step forward.
   * "warning": denotes the button destroys data, e.g. 'delete'.
   * "muted": For coupling with primary buttons as the 'backward' step.
   */
  look?: 'primary' | 'default' | 'muted' | 'warning' | undefined
  /**
   * optional additional styling
   */
  classes?: string
  /**
   * A disabled button renders but can no longer be clicked.
   */
  disabled?: boolean
  /**
   * A function to be called when the button is clicked
   */
  onClick?: (...params: any) => any
  /**
   * Specify the role of the button for accessibility
   */
  role?: string
  tabIndex?: number
  type?: 'button' | 'reset' | 'submit'
}

const Button = ({
  look,
  children,
  classes,
  disabled,
  onClick,
  role,
  tabIndex,
  type,
  ...props}: ButtonProps) => {
  return(
    <button
      disabled={disabled}
      onClick={(e) => {
        if (!disabled && onClick) {
          onClick()
        }
      }}
      className={`${classes} ${classNames({
        button: true,
        'Disabled': !!disabled,
        'Muted': look === 'muted',
        'Primary': look ==='primary',
        'Warning': look === 'warning'
      })}`}
      role={role}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button