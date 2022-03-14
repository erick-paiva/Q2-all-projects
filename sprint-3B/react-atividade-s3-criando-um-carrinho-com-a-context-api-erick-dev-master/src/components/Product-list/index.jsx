import Button from "../Button";
import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";
import { Container, List } from "./styles";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);
  console.log(type)
  return (
    <Container>
      <List>
      
          {type === "catalogue" &&
          <div className="catalogo">
            <h2>Catalogo</h2>
            <ul className="catalogoFilho">
            {catalogue.map((item, index) => (
              <li key={index}>
                {item.name}
                <Button type={type} item={item} />
              </li>
            ))}
            </ul>
            </div>}
      

          {type === "cart" &&
          <div className="carrinho">
          <h2>Carrinho</h2>
          <ul className="listaCarrinho">
            {cart.map((item, index) => (
              <li key={index}>
                {item.name}
                <Button type={type} item={item} />
              </li>
            ))}
            </ul>
            </div>
            }
     
      </List>
    </Container>
  );
};
export default ProductList;
