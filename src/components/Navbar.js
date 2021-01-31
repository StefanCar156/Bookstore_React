import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { BiSearchAlt } from 'react-icons/bi'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { amount, handleToggleCart, searchValue, handleSearchValue } = useGlobalContext()
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    
    return (
        <nav>
            <div className="nav-container">
                <Link to="/">
                    <h1 className="logo">Bookstore</h1>
                </Link>
                <div className="nav-btns">
                    <Link to="/">
                    <div className="nav-search">
                        <input 
                        type="text" 
                        value={searchValue}
                        onChange={(e) => handleSearchValue(e)}
                        className={`search-input ${isSearchOpen && `search-input-active`}`}
                        placeholder="Search..." />
                        <button className="search-btn" 
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        style={{backgroundColor: `${isSearchOpen ? `#ec1616` : `#6d6e70`}` }}
                        ><BiSearchAlt /></button>
                    </div>
                    </Link>
                    <button className="cart-btn" onClick={handleToggleCart}><FiShoppingCart /><span>{amount}</span></button>
                </div>

                
            </div>
        </nav>
    )
}
export default Navbar