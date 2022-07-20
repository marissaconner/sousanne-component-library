import React from 'react'
import '../design/Style.css'
import './Icon.css'
import navigation from './paths/navigation' 

export interface IconProps {
  id: string
  /** Optional additional styling
  * */
  classes?: string
  /**
   * String to decide what to display
  */
  name: string
  height?: string
  title?: string
  width?: string
  viewbox?: string
  disabled?: boolean
}

const Icon = ({
  id,
  classes = '',
  name = '',
  viewbox,
  title,
  width,
  height,
  disabled,
  ...props}: IconProps) => {

  let opts = {} as { [key:string]: string }
  const svg = navigation[name]
  if (svg.fillRule) {
    opts['fill-rule'] = svg.fillRule
  }
  if (svg.clipRule) {
    opts['clip-rule'] = svg.clipRule
  }
  if (svg.d) {
    opts['d'] = svg.d
  }

  return (
    <>
      <svg
        className={`icon ${classes} ${disabled ? 'Disabled' : ''}`.trim()}
        version="1.1"
        height={`${height ? height : '16'}px`}
        width={`${width ? width : '16'}px`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewbox || '0 0 16 16'}
      >
        <title>${title || `${name} icon`}</title>
        <path {...opts}></path>
      </svg>
    </>
  )
}

export default Icon