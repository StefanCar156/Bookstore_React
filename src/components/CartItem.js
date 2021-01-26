import React from 'react'
import { TiTimes } from 'react-icons/ti'
import { MdDelete, MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { useGlobalContext } from '../context'

const CartItem = ({item, id}) => {
    const { handleRemoveCartItem, increaseAmount, decreaseAmount } = useGlobalContext()
    return (
        <li className="cart-item">
            <span className="cart-item-name">{item.cartItemTitle}</span>
            <span className="cart-item-price">{item.cartItemPrice}</span>
            <TiTimes />
            <div className="item-amount-container">
                <button className="amount-btn" onClick={() =>  increaseAmount(id)}><MdKeyboardArrowUp /></button>
                <p className="amount">{item.cartItemAmount}</p>
                <button className="amount-btn" onClick={() => decreaseAmount(id)} ><MdKeyboardArrowDown /></button>
            </div>
            <button className="remove-cart-item-btn" onClick={() => handleRemoveCartItem(id)}><MdDelete /></button>
        </li>
    )
}
export default CartItem