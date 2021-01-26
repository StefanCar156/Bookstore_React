import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState({})
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [total, setTotal] = useState(0)
    const [amount, setAmount] = useState(0)
    const [categoryFilters, setCategoryFilters] = useState(null)

    const handleToggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    const handleChangeCategory = (e) => {
        e.target.parentElement.childNodes.forEach((child) => {
            child.classList.remove("category-item-active")
        })
        if (e.target.textContent === "All Categories") {
            setCategoryFilters(null)
        } else {
            setCategoryFilters(e.target.textContent)
            e.target.classList.add("category-item-active")
        }
    }

    const handleAddItemToCart = (e) => {
        const newCartItemTitle = e.target.parentElement.children[0].textContent
        const newCartItemPrice = e.target.parentElement.children[1].textContent

        // Check if item is already in the cart
        let isSameItem = false
        cartItems.map((item) => {
            if (item.cartItemTitle === newCartItemTitle) {
                alert("Item is already in the cart!")
                isSameItem = true
            }
        })
        if (isSameItem) {
            return
        } 
        const newCartItem = {
            cartItemTitle: newCartItemTitle,
            cartItemPrice: newCartItemPrice,
            cartItemAmount: 1
        }
        setCartItems([...cartItems, newCartItem])
    }

    const handleRemoveCartItem = (id) => {
        setCartItems(cartItems.filter((item) => cartItems.indexOf(item) !== id))
    }

    const increaseAmount = (id) => {
        for (let i = 0; i < cartItems.length; i++) {
            if (i === id) {
                let newCartItemAmount = cartItems[i].cartItemAmount + 1
                let updatedCartItem = {...cartItems[i], cartItemAmount: newCartItemAmount}
                let newCartItems = cartItems
                newCartItems[i] = updatedCartItem
                setCartItems([...newCartItems])
            }
        }
    }
    const decreaseAmount = (id) => {
        for (let i = 0; i < cartItems.length; i++) {
            if (i === id) {
                let newCartItemAmount = cartItems[i].cartItemAmount - 1
                // Prevent amounts less than 1
                if (newCartItemAmount < 1) {
                    newCartItemAmount = 1
                } 
                let updatedCartItem = {...cartItems[i], cartItemAmount: newCartItemAmount}
                let newCartItems = cartItems
                newCartItems[i] = updatedCartItem
                setCartItems([...newCartItems])
            }
        }
    }

    const getTotalAmount = () => {
        let updatedAmount = 0
        cartItems.map((item) => {
            updatedAmount += item.cartItemAmount
        })
        setAmount(updatedAmount)
    }

    const getTotal = () => {
        let newTotal = 0
        cartItems.map((item) => {
            newTotal += item.cartItemPrice.replace('$', '') * item.cartItemAmount
        })
        setTotal(newTotal.toFixed(2))
    }

    useEffect(() => {
        getTotalAmount()
        getTotal()
    }, [cartItems])

    const handleConfirmOrder = () => {
        alert(`Your order of $${total} is confirmed`)
        setCartItems([])
    }

    return <AppContext.Provider value={{loading, setLoading, books, setBooks, handleChangeCategory, handleAddItemToCart, cartItems, handleToggleCart, isCartOpen, handleRemoveCartItem, amount, total, increaseAmount, decreaseAmount, handleConfirmOrder, categoryFilters}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }