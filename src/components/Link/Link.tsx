import React from 'react'
import Style from '../design/Style'
import '../design/Style.css'
import './Link.css'


interface LinkProps {
  /**
   * Link content should be in lowercase with exception of names/abbreviations
  */
  text: string
}

const Link = ({text, ...props}: LinkProps) => {
  return(
    <a>
      {text}
    </a>
  )
}

export default Link