import React from 'react'
import classNames from 'classnames'
import Style from '../design/Style'
import '../design/Style.css'
import './Button.css'


interface ButtonProps {
  label: string
  type?: 'primary' | 'secondary' | 'ghost' | 'warning'
  disabled?: boolean
  onClick?: () => void
}

const Button = ({type = 'secondary', label, disabled, ...props}: ButtonProps) => {
  return(
    <button
      disabled={disabled}
      type={type}
      className={classNames({
        button: true,
        'Disabled': !!disabled,
        'Ghost': type === 'ghost',
        'Primary': type ==='primary',
        'Warning': type === 'warning'
      })}
    >
      {label}
    </button>
  )
}

export default Button