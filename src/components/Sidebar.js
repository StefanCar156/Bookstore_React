import React from 'react'
import { useGlobalContext } from '../context'

const Sidebar = () => {
    const { books, handleChangeCategory } = useGlobalContext()
    let categories = []
    if (Array.isArray(books.booksList)) {
        books.booksList.map((book, i) => {
            categories.push(book.category)
        })
    }
    let uniqueCategories = [...new Set(categories)]
    return (
        <aside className="sidebar">
            <ul className="categories-list">
                <li className="category-item" onClick={(e) => handleChangeCategory(e)}>All Categories</li>
                {
                    uniqueCategories.sort().map((category, i) => {
                        return <li key={i} className="category-item" onClick={(e) => handleChangeCategory(e)} >{category}</li>
                    })
                }
            </ul>
        </aside>
    )
}
export default Sidebar