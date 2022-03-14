import { Container } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../../Providers/Cart";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export const Header = () => {
    const {cart} = useCart()
    const history = useHistory()
  return (
    <Container>
      <h1 onClick={() => history.push("/")}>Kenzie Shop refactor</h1>
      <Link to="/carrinho">
        <AiOutlineShoppingCart size={35} color="yellow" />
       
        {cart.length > 0 && <span>{cart.length}</span> }
        </Link>
    </Container>
  );
};
