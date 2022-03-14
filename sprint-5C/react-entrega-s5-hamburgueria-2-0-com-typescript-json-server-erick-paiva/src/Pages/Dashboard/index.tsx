import { Box, Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { ModalCart } from "../../Components/ModalCart";
import { useCart } from "../../Hooks/CartProvider";
import { api } from "../../Services";

interface Iproduct {
  img: string;
  name: string;
  price: number;
  category: string;
  id: number;
  amount: number;
}

export const Dashboard = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [nameSearch, setNameSearch] = useState("a");
  const { addToCart, getCart, setVisible } = useCart()


  const productsFiltered = products.filter(
    (product) =>
      product.name.toLowerCase() === nameSearch ||
      product.category.toLowerCase() === nameSearch
  );
  useEffect(() => {
    api
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));

  getCart()
  }, []);

  return (
    <Box>
      <Header nameSearch={nameSearch} setNameSearch={setNameSearch} />
      <Flex
        flexWrap={["nowrap", "wrap"]}
        padding={["15px 0px", "15px 30px"]}
        justifyContent={["flex-start", "center", "center"]}
        overflowX={["scroll"]}
        onClick={() => setVisible(false)}
      >
        {nameSearch.length > 1 ? (
          <>
            {productsFiltered.length > 0 ? (
              <>
                {productsFiltered.map((ele) => (
                  <Card product={ele} key={ele.id} />
                ))}
              </>
            ) : (
              <Text fontWeight="bold" color="negative">Não foi possivel encontrar o produto</Text>
            )}
          </>
        ) : (
          <>
            {products.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </>
        )}
      </Flex>
    </Box>
  );
};
