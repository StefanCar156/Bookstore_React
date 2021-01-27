import React from 'react';
import './App.css';
import BooksContainer from './components/BooksContainer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import BookDetailsModal from './components/BookDetailsModal';

function App() {
  return <div className="App">
    <Navbar />
    <Cart />
    <BooksContainer />
    <BookDetailsModal />
  </div>
}

export default App;
