import React from 'react'
import { useGlobalContext } from '../context'
import CartItem from './CartItem'

const Cart = () => {
    const { cartItems, isCartOpen, total, handleConfirmOrder } = useGlobalContext()

    if (cartItems.length > 0) {
        return (
            <div className={`cart-container ${isCartOpen && `cart-container-open`}`}>
                <ul className="cart-items">
                    {cartItems.map((item, i) => {
                        return <CartItem key={i} item={item} id={i} />
                    })}
                </ul>
                <div className="cart-total">
                    <h1>Total: <span>${total}</span></h1>
                    <button className="confirm-order-btn" onClick={handleConfirmOrder}>Confirm</button>
                </div>
            </div>
        )
    }
    return (
        <div className={`cart-container ${isCartOpen && `cart-container-open`}`}>
                <p className="empty-cart-notification">Your cart is currently empty</p>
            </div>
    )
    
}
export default Cart