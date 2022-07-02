import React from 'react'
import classNames from 'classnames'
import '../design/Style.css'
import './UList.css'

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
  children,
  classes = '',
  ...props}: UListProps) => {
  return(
    <ul className={`unordered-list ${classes}`}>
      {children}
    </ul>
  )
}

export default UList