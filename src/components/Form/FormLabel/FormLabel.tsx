import React from 'react'
import classNames from 'classnames'
import '../../design/Style.css'
import '../Form.css'

export interface FormLabelProps {
  children: React.Node
  /**
   * Indicate the HTML element ID to pair with the form label
   */
  htmlFor: string
  /** 
   * Optional additional styling
  * */
  classes?: string
}

const FormLabel = ({
  children,
  htmlFor,
  classes,
  ...props
}: FormLabelProps) => {
  return(
    <label
      htmlFor={htmlFor}
      type="text"
      className={`form-group_label ${classes} ${classNames({
        'Disabled': disabled
      })}`}
    >
      {children}
    </label>
  )
}

export default FormLabel