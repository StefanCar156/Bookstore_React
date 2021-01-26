import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useGlobalContext } from '../context'

const Navbar = () => {
    const { amount, handleToggleCart } = useGlobalContext()
    return (
        <nav>
            <div className="nav-container">
                <h1 className="logo">Bookstore</h1>
                <button className="cart-btn" onClick={handleToggleCart}><FiShoppingCart /><span>{amount}</span></button>
            </div>
        </nav>
    )
}
export default Navbar