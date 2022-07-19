import React from 'react'
import '../design/Style.css'
import './Icon.css'

export interface IconProps {
  id: string
  /** Optional additional styling
  * */
  classes?: string
  /**
   * String to decide what to display
  */
  name: string
}

const UList = ({
  id,
  classes = '',
  name = '',
  ...props}: IconProps) => {
  return(
    <svg>
    </svg>
  )
}

export default UList