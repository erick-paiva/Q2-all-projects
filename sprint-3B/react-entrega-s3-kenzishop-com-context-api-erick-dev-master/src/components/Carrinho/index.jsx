
import ButtonPedido from "../ButtonPedido"
import "./styles.css"

const Carrinho = ({produto}) => {
    return(
        <div className="CarrinhoPedido">
            <h3>Resumo do pedido</h3>
            <div className="TotalProdutos">
                <h4>{produto.length} Produtos</h4>
                <p>{`R$ ${produto.reduce((a,e) => a+Number(e.preco),0).toFixed(2)}`}</p>
            </div>
            <ButtonPedido >Finalizar o pedido</ButtonPedido>
        </div>
    )
}

export default Carrinho