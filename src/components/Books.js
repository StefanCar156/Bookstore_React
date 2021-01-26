import React from 'react';
import { useGlobalContext } from '../context';
import Book from './Book';
const Books = ({books, loading}) => {
    const { categoryFilters } = useGlobalContext()
    // Check if, after loading is done, fetched data returned an array
    if (!loading && Array.isArray(books.booksList)) {
        return (
            <div className="book-list">
                {books.booksList.map((book) => {
                    if (categoryFilters === null) {
                        return <Book key={book.id}  {...book} />
                    }
                    else if (book.category === categoryFilters) {
                        return <Book key={book.id}  {...book} />
                    }
                    
                })}
            </div>
        )
    }
    return <h1 className="no-books-notification">No books available.</h1>
  
}

export default Books;
