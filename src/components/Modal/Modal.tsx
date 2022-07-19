import React from 'react'
import classNames from 'classnames'
import '../design/Style.css'
import './Modal.css'
import Button from '../Button'
export interface ModalProps {
  /**
   * Required property for accessibility. This will be read by screen readers.
  */
  'ariaLabel': string
  /**
   * Children for the modal
  */
  children: React.ReactNode
  /**
   * Pass in a custom CSS class
  */
  classes?: string
  /**
   * Accessibility-minded label for the close button. Default is "close".
  */
  closeButtonLabel: string
  /**
  * Set the content of the modal's header (title).
  */
  heading: string
  /**
   * For screen readers, which will read the modal differently if this is an alert.
  */
  isAlert: bool
  /**
   * DOM element ID of the top level node
  */
  id: string
  /**
   * Whether the modal is open.
  */ 
  isOpen: bool
  /**
   * Designate that moving forward will delete data.
  */
  isWarning: bool
  /**
   * Handler for keypresses (down)
  */
  onKeyDown: (...params: any) => any
  /**
   * Handler for closing a modal.  The handler passed in should change the `isOpen` property.
  */
  onClose: (...params: any) => any
  /**
   * Handler for confirming an interactive modal's intended action (such as submitting a form). The handler passed in should change the `isOpen` property.
  */
  onAction: (...params: any) => any
  /**
  * If true, clicking outside the modal will not close the modal.
  */
  persistent: boolean
  /**
   * Control width of modal.
  */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /**
   * Specify if modal has scrolling content.
  * */
  scrolls?: boolean
  disabled?: boolean
  /**
   * custom on click event function
  * */
  onClick?: (...params: any) => any
}

const Modal = ({
  ariaLabel = '',
  children,
  classes = '',
  closeButtonLabel = 'close',
  heading,
  isAlert,
  id,
  isOpen,
  isWarning,
  onKeyDown = () => {},
  onClose = () => {},
  onAction = () => {},
  size,
  scrolls,
  disabled,
  ...props
}:ModalProps) => {

  const focusTrap = function () {
    console.log("Don't forget to do a focus trap")
  }

  return (
    <>
      <div
        tabIndex="0"
        onFocus={focusTrap}
      >
      </div>
      <dialog
        aria-hidden={!isOpen}
        aria-label={ariaLabel ? ariaLabel : heading || 'Modal'}
        className={`modal ${classes} ${classNames({
          Open: isOpen,
          Alert: isAlert,
          Warning: isWarning
        })}`
          .trim()}
        id={id}
        onClick={(e) => {onClick(e)}}
        onKeyDown={(e) => {onKeyDown(e)}}
        role={isAlert ? 'alertdialog' : 'dialog' }
        tabIndex="-1"
        open={isOpen}
      >
        <div className="modal_content">
          <div className="modal_header">
            <span className="modal_title">{heading}</span>
            <button
              type="button"
              className="modal_close"
              onClick={(e) => {onClose(e)}}
              aria-label={closeButtonLabel}
            >
              &times;
            </button>
          </div>
          <div className="modal_body">
            {children}
          </div>
          <div className="modal_footer">
            <Button
              id={`${id}-close`}
              type="button"
              onClick={(e) => {onClose(e)}}
            >
              {closeButtonLabel}
            </Button>
          </div>
        </div>
      </dialog>
      <div
        tabIndex="0"
        onFocus={focusTrap}
      >
      </div>
    </>
  )
}

export default Modal