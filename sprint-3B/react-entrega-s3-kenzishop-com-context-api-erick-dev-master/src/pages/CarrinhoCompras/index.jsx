import { useContext } from "react"
import Carrinho from "../../components/Carrinho"
import Header from "../../components/Header"
import ListProductsCarrinho from "../../components/ListProductsCarrinho"
import { CartContext } from "../../providers/cart"
import "./styles.css"
const CarrinhoCompras = () =>{
    const {cart} = useContext(CartContext)

    console.log(cart)
    return(
        <>
            <Header />
            <div className="containerCarrinho">
            <ListProductsCarrinho produtos={cart} />
            <Carrinho produto={cart} />
            </div>

        </>
    )
}
export default CarrinhoCompras