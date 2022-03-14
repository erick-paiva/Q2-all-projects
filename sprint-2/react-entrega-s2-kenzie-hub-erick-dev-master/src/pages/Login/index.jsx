import { Container, ContainerForm } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import Titulo from "../../components/TituloKenzie";
import api from "../../services/api";
import { toast } from "react-toastify";

import { TextField } from "@material-ui/core";
import { useState } from "react";
const Login = ({ setAuth }) => {
  localStorage.clear();
  const history = useHistory();
  const [erro, setErro] = useState(false);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .min(10, "No minimo 10 caracteres")
      .required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((resp) => {
        setAuth(true);
        localStorage.setItem(
          "@KenzieHub:token",
          JSON.stringify(resp.data.token)
        );
        history.push(`/home/users/${resp.data.user.id}`);
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setErro(true);
      });
  };
  return (
    <Container>
      <Titulo />
      <ContainerForm>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <TextField
            color={erro ? "error" : "primary"}
            label="Login"
            variant="outlined"
            {...register("email")}
          />
          <span className="msgError">{errors.email?.message}</span>
          <TextField
            color={erro ? "error" : "primary"}
            type="password"
            label="senha"
            variant="outlined"
            {...register("password")}
          />
          <span className="msgError">{errors.password?.message}</span>
          <button type="submit">Logar</button>
          <div className="divMsg">
            {" "}
            Criar uma Página para mostar suas{" "}
            <p> habilidades metas e progresso </p>{" "}
          </div>
          <button
            onClick={() => history.push("/cadastro")}
            className="button-Cadastrar"
          >
            Cadastrar
          </button>
        </form>
      </ContainerForm>
    </Container>
  );
};

export default Login;
