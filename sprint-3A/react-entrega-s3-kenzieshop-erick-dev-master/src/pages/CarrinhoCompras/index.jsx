import { useSelector } from "react-redux"
import Carrinho from "../../components/Carrinho"
import Header from "../../components/Header"
import ListProductsCarrinho from "../../components/ListProductsCarrinho"
import "./styles.css"
const CarrinhoCompras = () =>{
    const produtos = useSelector((state) => state.produto)
    console.log(produtos)
    return(
        <>
            <Header />
            <div className="containerCarrinho">
            <ListProductsCarrinho produtos={produtos} />
            <Carrinho produto={produtos} />
            </div>

        </>
    )
}
export default CarrinhoCompras