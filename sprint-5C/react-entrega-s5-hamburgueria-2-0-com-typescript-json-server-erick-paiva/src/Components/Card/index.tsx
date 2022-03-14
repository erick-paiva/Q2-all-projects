import {
  Box,
  Button,
  Center,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCart } from "../../Hooks/CartProvider";

interface Iproduct {
  img: string;
  name: string;
  price: number;
  category: string;
  amount: number;
}
interface CardProductsProps {
  product: Iproduct;
}

export const Card = ({ product }: CardProductsProps) => {
  const [color, setColor] = useState("#BDBDBD");
  const { addToCart, cart } = useCart()

  const produtoAchado = cart.find(ele => ele.name === product.name) || {amount:0}
  return (
    <Box
      // mt="20px"
      margin={["0 15px", "0 15px 15px"]}
      as="div"
      onMouseOverCapture={() => setColor("primary")}
      onMouseLeave={() => setColor("#BDBDBD")}
      border="2px solid #BDBDBD"
      _hover={{
        border: "2px solid #27AE60",
      }}
    >
      <VStack onMouseLeave={() => setColor("primary")} w={["300px", "300px"]}>
        <Center as="figure" bg="gray.0" w="100%">
          <Image src={product.img} alt={product.name} h="150px" />
        </Center>

        <VStack
          display="flex"
          w="100%"
          alignItems="flex-start"
          padding="0 20px 26px 20px"
        >
          <Text fontWeight="700" fontSize="18px">{product.name}</Text>
          <Text as="p" fontWeight="400" fontSize="12px" color="gray.300">{product.category}</Text>
          <Text fontWeight="600" fontSize="14px" color="primary">R$ {product.price.toFixed(2)}</Text>

          <Button
            h="40px"
            w="106px"
            color="white"
            background={color}
            _hover={{
              background: "primary",
            }}
            onClick={() => {
              addToCart(product, produtoAchado?.amount+1)
            }}
          >
            Adcionar
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};
