import React from 'react';
import { useGlobalContext } from '../context';

const Book = ({id, title, cover, price}) => {
  const { handleAddItemToCart } = useGlobalContext()

  return <article className="book">
            <img src={cover} alt={title} className="book-cover" />
            <div className="book-info">
              <h2 className="book-title">{title}</h2>
              <h4 className="book-price">${price}</h4>
              <button className="add-to-cart-btn" onClick={(e) => handleAddItemToCart(e)}>Add to cart</button>
            </div>
        </article>
}

export default Book;
