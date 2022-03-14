import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { dataProdutos } from "../../assets/dataProducts"
import { addProdutoCarrinho } from "../../store/modules/products/thunks"
import { aumentar } from "../../store/modules/total/action"
import "./styles.css"
const ListProducts = ({produtos=dataProdutos}) => {
    const dispatch = useDispatch()
    const aumentarNum = useDispatch()
    const disparador = (e) =>{
        dispatch(addProdutoCarrinho(e))
        aumentarNum(aumentar(1))
        toast.success('Produto adcionado!')
    }
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