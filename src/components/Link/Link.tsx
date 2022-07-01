import React from 'react'
import Style from '../design/Style'
import '../design/Style.css'
import './Link.css'

interface LinkProps {
  /**
   * Link content should be in lowercase with exception of names/abbreviations
  */
  text: string
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename'
  disabled?: boolean
  download?: string
  type?: string
  referrerpolicy?: string
}

const Link = ({text = 'link', href='#', target='_self', ...props}: LinkProps) => {
  return(
    <a
      href={href}
      target={target}
      className="link">
      {text}
    </a>
  )
}

export default Link