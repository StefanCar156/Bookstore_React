import React from 'react';
import './App.css';
import BooksContainer from './components/BooksContainer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  return <div className="App">
    <Navbar />
    <Cart />
    <BooksContainer />
  </div>
}

export default App;
