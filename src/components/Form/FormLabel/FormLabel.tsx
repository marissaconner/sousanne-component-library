import React from 'react'
import classNames from 'classnames'
import '../../design/Style.css'
import '../Form.css'

export interface FormLabelProps {
  children: React.Node
  /**
   * Indicate the HTML element ID to pair with the form label
   */
  labelFor: string
  /** 
   * Optional additional styling
  * */
  classes?: string
}

const FormLabel = ({
  children,
  labelFor,
  classes = '',
  ...props
}: FormLabelProps) => {
  return(
    <label
      className={`form-field_label ${classes}`}
      htmlFor={labelFor}
      type="text"
    >
      {children}
    </label>
  )
}

export default FormLabel