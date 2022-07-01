import React from 'react'
import classNames from 'classnames'
import '../design/Style.css'

export interface UListProps {
  /**
   * Children for the list
  */
  children: React.ReactNode
  /** Optional additional styling
  * */
  classes?: string
}

const UList = ({
  children = 'Link',
  classes,
  ...props
}:UListProps) => {
  return(
    <ul class="unordered-list">
      {children}
    </ul>
  )
}

export default UList