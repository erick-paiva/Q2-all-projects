import { Image, VStack, Box, Text } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
const Logo = require("../../assets/logo.png");
const Bolinhas = require("../../assets/bolinhas.png");

interface ILogoProps {
  ballsVisible?: boolean;
  margin?: string;
}

export const LogoBurguer = ({ ballsVisible, margin }: ILogoProps) => (
  <VStack spacing="10" flexDirection="column" alignItems="flex-start" margin={margin}>
    <Image src={Logo} />
    <Box border="1px solid #E0E0E0" display="flex" padding="15px">
      <Box padding="20px" bg="#27AE601A">
        <FiShoppingBag color="#219653" size="20px" />
      </Box>
      <Text color="gray.300" textAlign="start" ml="15px">
        A vida é como um sanduíche, é preciso recheá-la com os melhores
        ingredientes.
      </Text>
    </Box>
    {ballsVisible && <Image src={Bolinhas} />}
  </VStack>
);
