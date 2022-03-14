import { CartContext } from "./cart"

const Providers = ({children}) => {
    return(
        <CartContext>
            {children}
        </CartContext>
    )
}

export default Providers