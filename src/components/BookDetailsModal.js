import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'
import { IoClose } from 'react-icons/io5'

const BookDetailsModal = () => {
    const { bookDetails, isDetailsModalOpen, setIsDetailsModalOpen, modalLocation } = useGlobalContext()
    const container = useRef(null)
    const { title, author, category } = bookDetails

    useEffect(() => {
        const modal = container.current
        const {center, bottom} = modalLocation
        modal.style.left = `${center}px`
        modal.style.top = `${bottom}px`
    
      }, [modalLocation])

    return (
        <div className={`book-details-container ${isDetailsModalOpen && `book-details-container-active`}`} ref={container}>
            <button className="close-modal-btn" onClick={() => setIsDetailsModalOpen(false)}><IoClose /></button>
            <ul className="book-details-list">
                <li>Title: <span>{title}</span></li>
                <li>Author: <span>{author}</span></li>
                <li>Category: <span>{category}</span></li>
            </ul>
        </div>
    )
}
export default BookDetailsModal