import React, {createContext, useContext, useState} from 'react'

const CartContext = createContext()

export const useCartStore = () => useContext(CartContext)

export default function CartProvider(props) {
  const [items, setItems] = useState([])

  const addToCart = item => {
    const index = items.findIndex(cartItem => cartItem.id === item.id)
    if (index !== -1) return
    setItems([item, ...items])
  }

  return (
    <CartContext.Provider
      value={{
        cartList: items,
        addToCart,
      }}>
      {props.children}
    </CartContext.Provider>
  )
}
