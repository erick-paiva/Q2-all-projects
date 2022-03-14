import { Flex, useBreakpointValue, Box } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Hooks/AuthProvider";
import { LogoBurguer } from "../../Components/LogoBurguer";

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();
  const breakMobile = useBreakpointValue({ base: false, md: true });

  const signInSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    signIn(data);
  };

  return (
    <>
      {!breakMobile && <Box padding="15px 15px 0 15px"><LogoBurguer /></Box>}
      <Flex
        padding={["10px 15px", "10 15px", "0px", "0px"]}
        alignItems="center"
        justifyContent="center"
        // height={["auto", "auto", "100vh", "100vh"]}
        color="white"
      >
        <Flex
          w={["100%", "100%", "90%", "65%"]}
          justifyContent="center"
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
        >
          <LoginForm
            errors={errors}
            handleSignIn={handleSubmit(handleSignIn)}
            register={register}
          />
          {breakMobile && (
            <LogoBurguer ballsVisible={true} margin="0 0 0 10%" />
          )}
        </Flex>
      </Flex>
    </>
  );
};
