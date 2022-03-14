import { useContext } from "react";

import {CartContext} from "../../providers/cart"
import { CatalogueContext } from "../../providers/catalogue";
import "./styles.css"
const Button = ({type, item}) => {
    const {cart, addToCart, removeFromCart} = useContext(CartContext)
    const {catalogue, addToCatalogue, removeFromCatalogue} = useContext(CatalogueContext)
    const text = type === "catalogue" ? "Add to cart" : "Remove from cart";

    console.log(cart)
    console.log(catalogue,"catalogue")
    const handleClick = () => {
        if (type === "catalogue") {
          removeFromCatalogue(item);
          addToCart(item);
        } else {
          removeFromCart(item);
          addToCatalogue(item);
        }
      };

    return(
        <button onClick={handleClick}>{text}</button>
    )
}

export default Button
