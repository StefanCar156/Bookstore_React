import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const Book = ({id, title, cover, price}) => {
  const { handleAddItemToCart, setBookId } = useGlobalContext()

  return <article className="book">
            <div className="cover-container">
              <div className="cover-overlay"></div>
              <Link to="/book">
                <button className="details-btn" onClick={() => {setBookId(id)}}>View details</button>
              </Link>
              <img src={cover} alt={title} className="book-cover" />
            </div>
            <div className="book-info">
              <h2 className="book-title">{title}</h2>
              <h4 className="book-price">${price}</h4>
              <button className="add-to-cart-btn" onClick={() => handleAddItemToCart(id)}>Add to cart</button>
            </div>
        </article>
}

export default Book;
