import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback} from 'react'
import { createPortal } from 'react-dom'

const modalElement = document.getElementById('modal-root')

export function Modal({ children, fade = false, defaultOpened = false }, ref) {
    const [isOpen, setIsOpen] = useState(defaultOpened)

    const close = useCallback(() => setIsOpen(false), [])
    
    isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close
    }), [close])

    const handleEscape = useCallback(event => {
        if (event.keyCode === 27) close()
    }, [close])

    useEffect(() => {
        if (isOpen) document.addEventListener('keydown', handleEscape, false)
        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [handleEscape, isOpen])


    return createPortal(
        isOpen ? (
            <div className={`modal ${fade ? 'modal-fade' : ''}`}>
                {children}
            </div>
        ) : null,
        modalElement
    )
}


export default forwardRef(Modal)