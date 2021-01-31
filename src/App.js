import React from 'react'
import './App.css'
import BooksContainer from './components/BooksContainer'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookDetails from './components/BookDetails'

function App() {
  return <div className="App">
    <Router>
      <Navbar />
      <Cart />
      <Switch>
        <Route path="/" exact component={BooksContainer} />
        <Route component={BookDetails} />
      </Switch>
    </Router>
  </div>
}

export default App;
