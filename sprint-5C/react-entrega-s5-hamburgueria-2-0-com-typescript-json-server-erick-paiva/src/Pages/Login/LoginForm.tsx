import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { InputChakra } from "../../Components/Form/InputChakra/InputChakra";

interface SignInData {
  email: string;
  password: string;
}

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignInData>;
}

export const LoginForm = ({
  handleSignIn,
  errors,
  register,
}: LoginFormProps) => {
  const history = useHistory();
  return (
    <Grid
      onSubmit={handleSignIn}
      as="form"
      padding="26px 24px"
      border="2px solid #F5F5F5"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0"]}
      w={["100%", "100%", "500px", "500px"]}
      // h={["461px", "400px", "550px"]}
    >
      <Heading fontSize="30px">Login</Heading>
      <VStack mt="6" spacing="2">
        <Box w="100%">
          <InputChakra
            bg="gray.0"
            placeholder="Digite seu login"
            type="email"
            label="Email"
            error={errors.email}
            h="50px"
            {...register("email")}
          />
          {!errors.email && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: nome@email.com
            </Text>
          )}
        </Box>
        <InputChakra
          bg="gray.0"
          h="50px"
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
          error={errors.password}
          {...register("password")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          bg="primary"
          w="100%"
          color="white"
          h="50px"
          borderRadius="8px"
          _hover={{
            background: "#93D7AF",
          }}
          type="submit"
        >
          Entrar
        </Button>
        <Text color="#999999" textAlign="center">Crie sua conta para saborear muitas delícias e <br/>matar sua fome!</Text>
        <Button
          bg="gray.100"
          w="100%"
          color="gray.300"
          h="50px"
          borderRadius="8px"
          onClick={() => history.push("/signup")}
          _hover={{
            background: "gray.300",
            color:"gray.100"
          }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
