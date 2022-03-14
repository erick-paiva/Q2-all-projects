import {
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
  Box,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { InputChakra } from "../../Components/Form/InputChakra/InputChakra";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Hooks/AuthProvider";
import { LogoBurguer } from "../../Components/LogoBurguer";

interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup = () => {
  const history = useHistory();
  const { signUp } = useAuth();
  const breakMobile = useBreakpointValue({base:false, md: true})

  const signUpSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup.string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes")
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = (data: SignUpData) => {
    signUp(data)
  };

  return (
    <Flex
      padding={["10px 15px", "10 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="center"
      // height={["auto", "auto", "100vh", "100vh"]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "80%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        {breakMobile && <LogoBurguer ballsVisible={true} margin="0 10% 0 0" />}

        <Grid
          onSubmit={handleSubmit(handleSignUp)}
          as="form"
          padding="26px 24px"
          border="2px solid #F5F5F5"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
          mt={["4", "4", "0"]}
          w={["100%", "100%", "500px", "500px"]}
          // h={["461px", "400px", "570px"]}
        >
          <Heading
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            fontSize="18px"
            fontWeight="700"
          >
            Casdastro
            <Text
              onClick={() => history.push("/")}
              as="span"
              fontWeight="500"
              fontSize="14px"
              textDecoration="underline"
              color="gray.300"
              cursor="pointer"
            >
              Retornar para o login
            </Text>
          </Heading>
          <VStack mt="6" spacing="2">
            <Box w="100%">
              <InputChakra
                bg="gray.0"
                placeholder="Digite seu nome completo"
                type="text"
                label="Nome"
                error={errors.name}
                h="50px"
                {...register("name")}
              />
            </Box>
            <InputChakra
              bg="gray.0"
              placeholder="Digite seu email"
              type="email"
              label="Email"
              error={errors.email}
              h="50px"
              {...register("email")}
            />
            <InputChakra
              bg="gray.0"
              h="50px"
              type="password"
              placeholder="Digite sua senha"
              label="Senha"
              error={errors.password}
              {...register("password")}
            />
            <InputChakra
              bg="gray.0"
              h="50px"
              type="password"
              placeholder="Confirme sua senha"
              label="Confirme sua senha"
              error={errors.confirmPassword}
              {...register("confirmPassword")}
            />
          </VStack>
          <VStack mt="4" spacing="5">
            <Text color="#999999" textAlign="center">
              Crie sua conta para saborear muitas delícias e <br />
              matar sua fome!
            </Text>
            <Button
              type="submit"
              bg="gray.100"
              w="100%"
              color="gray.300"
              h="50px"
              borderRadius="8px"
              _hover={{
                background: "gray.300",
                color: "gray.100",
              }}
            >
              Cadastrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
