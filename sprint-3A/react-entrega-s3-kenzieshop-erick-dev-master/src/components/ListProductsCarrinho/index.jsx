import { dataProdutos } from "../../assets/dataProducts"
import "./styles.css"
const ListProductsCarrinho = ({produtos=dataProdutos}) => {

    return(
        <div className="containerListaCarrinho">
            <ul className="ListaCarrinho">
                <div className="PrecoProduto">
                <h3>Produto</h3> <h3>Preço</h3>
                </div>
            
                {produtos.map(e => <li className="productsCarrinho" key={e.id}>
                    <figure>
                        <img src={e.imageUrl} alt={e.produtoNome} />
                    </figure>
                    <h4>{e.produtoNome}</h4>
                    <p>R$ {Number(e.preco).toFixed(2)}</p>
                </li> )}
            </ul>
        </div>
    )
}

export default ListProductsCarrinho