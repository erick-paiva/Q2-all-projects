import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./styles.css";
import cart from "../../assets/img/cart.png";
import enter from "../../assets/img/enter.png";
const Header = () => {
  const history = useHistory();
  const { num } = useSelector((state) => state);
  return (
    <header>
      <h1 onClick={() => history.push("/")}>Kenzie shop</h1>
      <div className="controles">
        <div className="carrinhoIcon">
          <div className="numeroTotal">
            <img className="cart" src={cart} alt="carrinho" />
            {num > 0 && <span className="total">{num}</span>}
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
