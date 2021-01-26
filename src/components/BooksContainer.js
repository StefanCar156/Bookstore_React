import React, { useEffect } from 'react'
import Books from './Books'
import Sidebar from './Sidebar'
import { useGlobalContext } from '../context';

const BooksContainer = () => {
    const { loading, setLoading, books, setBooks } = useGlobalContext()
    
    const fetchData = async () => {
        setLoading(true);
    
        try {
          const response = await fetch('database.json'
          ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
          const fetchedBooks = await response.json()
          setLoading(false)
          setBooks(fetchedBooks)
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    
      useEffect(() => {
        fetchData();
      }, []);
    
      if (loading) {
        return (
          <div className="books-container">Loading...</div>
        )
      }
      return (
        <main>
          <Sidebar />
          <div className="books-container">
            <h1>E-books</h1>
          <Books books={books} loading={loading} />
        </div>
        </main>
        
      )
}
export default BooksContainer
