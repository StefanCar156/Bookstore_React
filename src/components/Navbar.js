import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { BiSearchAlt } from 'react-icons/bi'
import { useGlobalContext } from '../context'

const Navbar = () => {
    const { amount, handleToggleCart, searchValue, handleSearchValue } = useGlobalContext()
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    return (
        <nav>
            <div className="nav-container">
                <h1 className="logo">Bookstore</h1>
                <div className="nav-btns">
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
                    <button className="cart-btn" onClick={handleToggleCart}><FiShoppingCart /><span>{amount}</span></button>
                </div>

                
            </div>
        </nav>
    )
}
export default Navbar