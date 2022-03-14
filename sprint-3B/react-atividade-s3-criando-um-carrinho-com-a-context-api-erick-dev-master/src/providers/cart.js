import { createContext,useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children}) =>{
    const [cart, setcart] = useState([])

    const addToCart = (item) => {
        setcart([...cart, item])
    }
    const removeFromCart = (item) => {
        const newcart = cart.filter(
            (itemOnCart => itemOnCart.name !== item.name)
        )
        setcart(newcart)
    }
    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
