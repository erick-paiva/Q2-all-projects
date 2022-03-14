import {
  Box,
  Center,
  Flex,
  Image,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { InputChakra } from "../Form/InputChakra/InputChakra";
import { AiOutlineSearch } from "react-icons/ai";
import { MdSearch } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { useAuth } from "../../Hooks/AuthProvider";
import { useEffect, useState } from "react";
import { ModalCart } from "../ModalCart";
import { useCart } from "../../Hooks/CartProvider";
const Logo = require("../../assets/logo.png");

interface HeaderProps {
  nameSearch: string;
  setNameSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ nameSearch, setNameSearch }: HeaderProps) => {
  const { signOut } = useAuth();
  const { visible, setVisible } = useCart();
  const breakMobile = useBreakpointValue({ base: false, md: true });
  const [nameInputSearch, setNameInputSearch] = useState("a");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = useCart();

  useEffect(() => {
    if (nameInputSearch.length === 0) {
      setVisible(!visible);
      setNameSearch("a");
    }
  }, [nameInputSearch]);

  console.log();
  if (visible && !breakMobile) {
    return (
      <Flex w="100%" alignItems="center" justifyContent="center" mr="8%">
        <Box w="95%" mt="10px">
          <InputChakra
            name="InputSearch"
            onChange={(e) =>
              setNameInputSearch(e.currentTarget.value.toLocaleLowerCase())
            }
            icon={
              <Box
                borderRadius="8px"
                padding="14px 12px"
                bg="primary"
                cursor="pointer"
                onClick={() => setNameSearch(nameInputSearch)}
              >
                <AiOutlineSearch color="white" fontWeight="bold" size="17px" />
              </Box>
            }
          />
        </Box>
      </Flex>
    );
  }

  return (
    <Flex
      bg="gray.0"
      h="80px"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
    >
      <ModalCart isOpen={isOpen} onClose={onClose} />
      <Image
        src={Logo}
        h={["auto"]}
        w={["120px", "150px", "250px"]}
        ml={["4%", "6%", "8%"]}
      />

      <Flex w="35%" alignItems="center" justifyContent="space-between" mr="8%">
        {breakMobile ? (
          <InputChakra
            onChange={(e) =>
              setNameInputSearch(e.currentTarget.value.toLocaleLowerCase())
            }
            name="InputSearch"
            icon={
              <Box
                borderRadius="8px"
                padding="14px 12px"
                bg="primary"
                cursor="pointer"
                onClick={() => setNameSearch(nameInputSearch)}
              >
                <AiOutlineSearch color="white" fontWeight="bold" size="17px" />
              </Box>
            }
          />
        ) : (
          <Box onClick={() => setVisible(!visible)} cursor="pointer">
            <MdSearch size="30px" color="#BDBDBD" />
          </Box>
        )}
        <Box margin="0 25px" cursor="pointer" onClick={onOpen} display="flex">
          <BsCart3 size="30px" color="#BDBDBD" />
          <Center as="span" borderRadius="7px" bg="primary" color="white" fontSize="14px" w="20px" h="24px">
            {cart.reduce((acc, ele) => (acc += ele.amount), 0)}
          </Center>
        </Box>
        <Box cursor="pointer" onClick={signOut}>
          <IoExitOutline size="30px" color="#BDBDBD" />
        </Box>
      </Flex>
    </Flex>
  );
};
