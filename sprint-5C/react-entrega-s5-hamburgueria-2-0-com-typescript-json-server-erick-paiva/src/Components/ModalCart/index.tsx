import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useCart } from "../../Hooks/CartProvider";
import { FaTrash } from "react-icons/fa";
interface ModalCreateTaskProps {
  isOpen: boolean;
  onClose: () => void;
  total?: number;
}

export const ModalCart = ({ isOpen, onClose, total }: ModalCreateTaskProps) => {
  const { cart, removerTudo, removerUmItem , reduceItem, addToCart } = useCart();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="5px" bg="white" color="gray.800" minHeight="200px" maxHeight="450px">
        <ModalHeader
          display="flex"
          bg="primary"
          justifyContent="space-between"
          borderRadius="5px 5px 0px 0px"
        >
          <Text fontWeight="700" color="white">
            Carrinho de compras
          </Text>
          <Text color="#FFFFFF80" cursor="pointer" onClick={onClose}>
            X
          </Text>
        </ModalHeader>

        <ModalBody textAlign="center" overflowY="auto" h="100px" borderBottom="2px solid #E0E0E0">
          {cart.length > 0 ? (
            <>
              {cart.map((ele) => (
                <Flex key={ele.id} mt="18px" justifyContent="space-between">
                  <Flex flexDirection="row">
                    <Box as="figure" bg="gray.100" borderRadius="5px" mr="15px">
                      <Image src={ele.img} w="82px" h="auto" />
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="space-between">
                      <Text fontSize="18px" fontWeight="bold">
                        {ele.name}
                      </Text>
                      <Flex border="2px solid #F2F2F2" w="100px" justifyContent="space-between" alignItems="center">
                        <Box
                          w="25px"
                          h="30px"
                          alignItems="center"
                          justifyContent="center"
                          bg="#F2F2F2"
                          color="negative"
                          cursor="pointer"
                          onClick={() => addToCart(ele,ele.amount+1)}
                        >
                          +
                        </Box>
                        <Text fontSize="12px">

                        {ele.amount}
                        </Text>
                        <Box
                          w="25px"
                          h="30px"
                          alignItems="center"
                          justifyContent="center"
                          bg="#F2F2F2"
                          color="negative"
                          cursor="pointer"
                          onClick={() => ele.amount > 1 && reduceItem(ele,ele.amount-1)}
                        >
                          -
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>

                  <Box cursor="pointer" onClick={() => removerUmItem(ele)}>
                    <FaTrash size="20px" color="#BDBDBD" />
                  </Box>
                </Flex>
              ))}
            </>
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              h="100%"
            >
              <Text fontWeight="bold" fontSize="18px">
                Sua sacola está vazia
              </Text>
              <Text fontWeight="400" fontSize="14px">
                Adicione itens
              </Text>
            </Box>
          )}
        </ModalBody>

        {cart.length > 0 && (
          <ModalFooter flexDirection="column" >
            <Flex w="100%" justifyContent="space-between" marginBottom="20px">
              <Text fontWeight="600" fontSize="14px">
                Total
              </Text>
              <Text fontWeight="600" fontSize="14px" color="gray.300">
                R$
                {cart
                  .reduce((acc, ele) => (acc += ele.price * ele.amount), 0)
                  .toFixed(2)}
              </Text>
            </Flex>
            <Button
              type="submit"
              bg="gray.100"
              color="white"
              w="100%"
              h="60px"
              _hover={{ bg: "gray.300" }}
              onClick={removerTudo}
            >
              Remover todos
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};
