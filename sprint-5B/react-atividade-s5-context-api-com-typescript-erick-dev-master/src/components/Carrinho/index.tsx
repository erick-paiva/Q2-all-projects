import toast from "react-hot-toast";
import { useCart } from "../../Providers/Cart";
import { Card } from "../Card";
import { Header } from "../Header";
import { Container } from "./styles";

export const Carrinho = () => {
  const { cart } = useCart();
  return (
    <>
      <Header />
      <Container>
        <ul>
          {cart.map((ele) => (
            <Card product={ele} remove={true} />
          ))}
        </ul>
        <div className="totalCarrinho">
          Total
          {` R$ ${cart.reduce((acc, ele) => acc + ele.price, 0).toFixed(2)}`}
          <button onClick={() => toast.success("Pedido Finalizado")}>Finalizar Pedido</button>
        </div>
      </Container>
    </>
  );
};
