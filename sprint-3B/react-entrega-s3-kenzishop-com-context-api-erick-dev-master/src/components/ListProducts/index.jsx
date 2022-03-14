import { useContext } from "react"
import toast from "react-hot-toast"
import { dataProdutos } from "../../assets/dataProducts"
import { CartContext } from "../../providers/cart/"
import "./styles.css"
const ListProducts = ({produtos=dataProdutos}) => {
    const disparador = (e) =>{
        addToCart(e)
        toast.success('Produto adcionado!')
    }
    const {addToCart} = useContext(CartContext)

    return(
        <div className="containerList">
            <ul className="listProducts">
                {produtos.map(e => <li key={e.id}>
                    <figure>
                        <img src={e.imageUrl} alt={e.produtoNome} />
                        <figcaption>{e.produtoNome.toLocaleLowerCase()}</figcaption>
                    </figure>
                    <p>R$ {Number(e.preco).toFixed(2)}</p>
                    <button className="glow-on-hover" onClick={() => disparador(e)}>Adcionar ao carrinho</button>
                </li> )}
            </ul>
        </div>
    )
}

export default ListProducts