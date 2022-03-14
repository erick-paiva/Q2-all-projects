import { Container, FormStyled } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Providers/Auth";

interface UserData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: UserData) => {
    signIn(data);
  };

  return (
    
      <Container>
      <h1>Login</h1>
        <FormStyled className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <div>
            <h4>Email:</h4>
            <input placeholder="email" {...register("email")} />
            <span className="msgError">{errors.email?.message}</span>
          </div>
          <div>
            <h4>Senha:</h4>
            <input placeholder="password*" {...register("password")} />
            <span className="msgError">{errors.password?.message}</span>
          </div>
          <button type="submit">logar!</button>
        </FormStyled>
      </Container>
  );
};
