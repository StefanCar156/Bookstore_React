import React from 'react';
import { useGlobalContext } from '../context';

const Book = ({id, title, cover, price}) => {
  const { handleAddItemToCart, handleViewDetails, handleOpenModal } = useGlobalContext()

  const displayModal = (e) => {
      const tempBtn = e.target.getBoundingClientRect()
      let center = (tempBtn.left + tempBtn.right) / 2
      let bottom = tempBtn.bottom - 200
      if (bottom < 0) {
        bottom += 120
      }
      handleViewDetails(id)
      handleOpenModal({center, bottom})
  }

  return <article className="book">
            <div className="cover-container">
              <div className="cover-overlay"></div>
              <button className="details-btn" onClick={(e) => displayModal(e)}>View details</button>
              <img src={cover} alt={title} className="book-cover" />
            </div>
            <div className="book-info">
              <h2 className="book-title">{title}</h2>
              <h4 className="book-price">${price}</h4>
              <button className="add-to-cart-btn" onClick={(e) => handleAddItemToCart(e)}>Add to cart</button>
            </div>
        </article>
}

export default Book;
