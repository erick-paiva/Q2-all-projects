import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import toast from "react-hot-toast";
import { api } from "../Services";
import { useAuth } from "./AuthProvider";

interface IChildren {
  children: ReactNode;
}
interface IProduct {
  img: string;
  name: string;
  price: number;
  category: string;
  id?: number;
  amount: number;
}

interface CartContextData {
  addToCart: (product: IProduct, quant: number) => void;
  getCart: () => void;
  cart: IProduct[];
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  removerTudo: () => void;
  reduceItem: (product: IProduct, quant: number) => void;
  removerUmItem: (product: IProduct) => void;
}

const CartProviderContext = createContext<CartContextData>(
  {} as CartContextData
);

const useCart = () => {
  const context = useContext(CartProviderContext);

  if (!context) {
    throw new Error("useCart must be used an CartProvider");
  }

  return context;
};

const CartProvider = ({ children }: IChildren) => {
  const [visible, setVisible] = useState(false);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [pode, setPode] = useState(true);
  const { accessToken, user } = useAuth();
  const tokenBearer = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const getCart = () => {
    api
      .get(`/cart?userId=${user.id}`, tokenBearer)
      .then((resp) => setCart(resp.data));
  };

  const addToCart = (product: IProduct, quant: number) => {
    const { amount, price, category, img, name } = product;
    if (!cart.find((prod) => prod.name === product.name) && pode === true) {
      setPode(false);
      api
        .post(
          `/cart`,
          { amount, price, category, img, name, userId: user.id },
          tokenBearer
        )
        .then((_) => {
          setPode(true);
          toast.success(`${product.name} adcionado com Sucesso`);
          getCart();
        });
    } else {
      const teste = cart.find((ele) => ele.name === product.name);
      // eslint-disable-next-line no-lone-blocks
      {
        !!teste &&
          api
            .patch(`/cart/${teste?.id}`, { amount: quant }, tokenBearer)
            .then((_) => {
              setPode(true);
              toast.success(`adcionado um ${product.name}`);
              getCart();
            });
      }
    }
  };
  const reduceItem = (product: IProduct, quant: number) => {
    const teste = cart.find((ele) => ele.name === product.name);
    api
      .patch(`/cart/${teste?.id}`, { amount: quant }, tokenBearer)
      .then((_) => {
        toast.success(`removido um ${product.name}`);
        getCart();
        setPode(true);
      });
  };

  const removerUmItem = (product: IProduct) => {
    api.delete(`/cart/${product.id}`, tokenBearer).then(() => {
      toast.success(`${product.name} removido com sucesso!`);
      getCart();
    });
  };

  const removerTudo = () => {
    cart.map((ele) =>
      api.delete(`/cart/${ele.id}`, tokenBearer).then(() => getCart())
    );
    toast.success("todos produtos foram removidos");
  };
  return (
    <CartProviderContext.Provider
      value={{
        addToCart,
        getCart,
        cart,
        visible,
        setVisible,
        reduceItem,
        removerUmItem,
        removerTudo,
      }}
    >
      {children}
    </CartProviderContext.Provider>
  );
};

export { CartProvider, useCart };
