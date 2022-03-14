import { createContext, useContext, useState, ReactNode } from "react";
import toast from "react-hot-toast";

interface ProductChildren {
    children: ReactNode;
}

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }
interface CartProviderData {
    cart: Product[];
    addProduct: (product:Product) => void;
    deleteProduct: (productToBeDeleted: Product) => void;

}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children } : ProductChildren) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    if(!cart.some(ele => ele.id === product.id)){
      setCart([...cart, product])
      toast.success('Adcionado com sucesso!')
    }else{
      toast.error("Você so pode adcionar um produto de cada!")
    }
  };

  const deleteProduct = (productToBeDeleted: Product) => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
        