import { useHistory } from "react-router";
import "./styles.css";
import cartImg from "../../assets/img/cart.png";
import enter from "../../assets/img/enter.png";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";
const Header = () => {
  const history = useHistory();
  const {cart} = useContext(CartContext)
  return (
    <header>
      <h1 onClick={() => history.push("/")}>Kenzie shop</h1>
      <div className="controles">
        <div className="carrinhoIcon">
          <div className="numeroTotal">
            <img className="cart" src={cartImg} alt="carrinho" />
            {cart.length > 0 && <span className="total">{cart.length}</span>}
          </div>

          <span
            className="irCarrinho"
            onClick={() => history.push("/carrinho")}
          >
            Carrinho
          </span>
        </div>

        <div className="entrar">

            <img className="enter" src={enter} alt="" />

          <h4>Entrar</h4> 
        </div>
      </div>
    </header>
  );
};

export default Header;
