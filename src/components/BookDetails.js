import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const BookDetails = () => {
    const { bookId, handleAddItemToCart, setSearchValue, handleChangeCategory } = useGlobalContext()
    const [readMore, setReadMore] = useState(false)
    const [currentBook, setCurrentBook] = useState({})
    const [isBookLoading, setIsBookLoading] = useState(true)

    const fetchBook = async () => {
        await fetch(`database.json`)
        .then((response) => response.json())
        .then(data => setCurrentBook(data.booksList.filter((book) => book.id === bookId)[0]))
    }
    useEffect(() => {
        fetchBook()
        setIsBookLoading(false)
    }, [])
    
    if (isBookLoading) {
        return (
            <div className="book-details-loading-container">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }else {
        const { id, cover, title, author, price, category, description = "" } = currentBook
        return (
        <div className="book-details-container">
            <div className="book-details-img-container">
                <img src={cover} alt={title} className="book-details-img" />
                <button className="details-add-to-cart-btn" onClick={() => handleAddItemToCart(id)} >Add to cart</button>
            </div>  
            <div className="book-details-info">
                <h1 className="book-details-title">{title}</h1>
                <h3 className="book-details-author">by <Link to="/"><span onClick={(e) => setSearchValue(e.target.textContent)}>{author}</span></Link></h3>
                <h3 className="book-details-category">Tags: <Link to="/"><span onClick={(e) => handleChangeCategory(e)}>{category}</span></Link></h3>
                <p className="book-details-price">Price: <span>${price}</span></p>
                <p className="book-details-description">{readMore ? description : `${description.substring(0, 400)}...`}
                <button className="read-more-btn" onClick={() => setReadMore(!readMore)}>{readMore ? "read less" : "read more"}</button></p>
            </div>
        </div>
    )
    }
    
}
export default BookDetails