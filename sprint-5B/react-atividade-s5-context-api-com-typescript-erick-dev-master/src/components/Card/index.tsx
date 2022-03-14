import toast from "react-hot-toast";
import { useCart } from "../../Providers/Cart";
import { Container } from "./styles";


interface ProductProps {
  product: {
    image: string;
    title: string;
    description: string;
    price: number;
    id:number;
  };
  remove?: boolean;
}

export const Card = (props: ProductProps) => {
  const { product, remove=false } = props;
  const {addProduct, deleteProduct} = useCart()
  const addToCart = () => {
    addProduct(product)
  }
  const removeFromCart = () => {
    deleteProduct(product)
    toast.success('Removido com sucesso!')
  }
  return (
    <Container>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>R$ {product.price.toFixed(2)}</span>
      {remove ? <button onClick={removeFromCart}>Remover do carrinho</button> : <button onClick={addToCart}>Adcionar no carrinho</button>}
    </Container>
  );
};
