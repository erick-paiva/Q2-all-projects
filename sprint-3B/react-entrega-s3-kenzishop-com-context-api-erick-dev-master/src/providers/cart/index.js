import { createContext,useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addToCart = (produto) => {
        setCart([...cart, produto])
    }

    return(
        <CartContext.Provider value={{cart, addToCart}} >
            {children}
        </CartContext.Provider>
    )
}
