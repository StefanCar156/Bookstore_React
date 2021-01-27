import React from 'react'
import { useGlobalContext } from '../context'
import Book from './Book'
const Books = ({books, loading}) => {
    const { categoryFilters, searchValue } = useGlobalContext()
    // Check if, after loading is done, fetched data returned an array
    if (!loading && Array.isArray(books.booksList)) {
        return (
            <div className="book-list">
                {
                    books.booksList.map((book) => {
                        // If user does not enter search value
                        if (searchValue === "") {
                            if (categoryFilters === null) {
                                return <Book key={book.id}  {...book} />
                            }
                            else if (book.category === categoryFilters) {
                                return <Book key={book.id}  {...book} />
                            }
                        } else {
                            // If user enters some search value, but does not select category
                            if (categoryFilters === null) {
                                if ((book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                                book.author.toLowerCase().includes(searchValue.toLowerCase()))) {
                                    return <Book key={book.id}  {...book} />
                                }
                            } else {
                                // If user enters search value AND selects category
                                if ((book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                                book.author.toLowerCase().includes(searchValue.toLowerCase())) && book.category === categoryFilters) {
                                    return <Book key={book.id}  {...book} />
                                }
                            }
                        }
                    })
                }
            </div>
        )
    }
    return <h1 className="no-books-notification">No books available.</h1>
  
}

export default Books;
