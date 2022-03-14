import toast from "react-hot-toast"
import "./styles.css"
const ButtonPedido = () =>{

    return(
        <span onClick={() => toast.success('Pedido Finalizado com sucessso!')} class="btn-flip" data-back="Pedido" data-front="Finalizar"></span>
    )
}

export default ButtonPedido