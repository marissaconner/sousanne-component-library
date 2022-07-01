import React from 'react'
import Style from '../design/Style'

interface ButtonProps {
  label: string
  type?: 'primary' | 'ghost' | 'warning'
  disabled?: boolean
  onClick?: () => void
}

class Button extends Style<ButtonProps> {
  render() {
    return(
      <button
        disabled={this.props.disabled}
      >
        {this.props.label}
      </button>
    )
  }
}

export default Button