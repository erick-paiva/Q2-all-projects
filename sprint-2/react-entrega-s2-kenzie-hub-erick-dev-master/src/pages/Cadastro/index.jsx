import Titulo from "../../components/TituloKenzie";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContainerForm } from "./styles.js";
import { Container } from "./styles.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { useState } from "react";
import ModalCadastro from "../../components/ModalCadastro";
const Cadastro = () => {
  localStorage.clear()
  const [modal, setModalVisible] = useState(false)
  const [modulo, setModulo] = useState("")
  const criarUser = (user) => {
    api.post("/users" ,user).then((resp) => {;setModalVisible(!modal);notify()}).catch(() => error())
    
  }
  const error = () => {
    toast.error('Email ja existe!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  const notify = () => {toast.success('Usuario cadastrado com sucesso!', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });};
  const formSchema = yup.object().shape({
    email: yup.string().email("Email Invalido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "password fraca! adcione letras, numeros e caracteres especiais")
      .required("Campo Obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Mínimo de 8 digitos, um caracter especial e uma letra maiúscula"
        ),
        name: yup
          .string()
          .min(10, "No minimo 10 caracteres")
          .required("Campo Obrigatório")
          .matches(
            /^([\w]{3,})+\s+([\w\s]{3,})+$/i,
            "Somente letras e o nome completo"
          ),
    bio: yup
    .string()
    .min(10, "No minimo 10 caracteres")
    .required("Campo Obrigatório"),
    contact: yup
      .string()
      .min(11, "Numero inválido")
      .required("Campo Obrigatório")
      .matches(
        /(\?\d{2}\?\s)?(\d{4,5}\d{4})/,
        "contact não está correto o formator correto é (00) 90000-0000"
      ),
    confirmapassword: yup.string().oneOf([yup.ref("password")], "password não confere"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    data.course_module = modulo
    criarUser(data)
  };

  return (
    <Container>
      {modal && <ModalCadastro setModalVisible={setModalVisible} modal={modal}/>}
      <Titulo />
      <ContainerForm>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <input type="text" placeholder="Nome" {...register("name")} />
          <span className="msgError">{errors.name?.message}</span>
          <input type="text" placeholder="Email" {...register("email")} />
          <span className="msgError">{errors.email?.message}</span>
          <input type="text" placeholder="Bio" {...register("bio")} />
          <span className="msgError">{errors.bio?.message}</span>
          <input type="text" placeholder="Contato" {...register("contact")} />
          <span className="msgError">{errors.contact?.message}</span>
          <ul className="lista-Modulos">
            <li onClick={()=> setModulo("primeiro modulo (Introduçao ao front end)")}>
              Primeiro
              <div className="modalPrimeiro msgModalModulos">
                <h4>Primeiro Modulo</h4>(Introduçao ao front-end)
              </div>
            </li>
            <li onClick={()=> setModulo("segundo modulo (Front end avançado)")}>
              Segundo
              <div className="modalSegundo msgModalModulos">
                <h4>Segundo Modulo</h4>(Front-end avançado)
              </div>
            </li>
            <li onClick={()=> setModulo("terceiro modulo (Introduçao back end)")}>
              Terceiro
              <div className="modalTerceiro msgModalModulos">
                <h4>Terceiro Modulo</h4>(Introduçao ao back-end)
              </div>
            </li>
            <li onClick={()=> setModulo("quarto modulo (Back end avançado)")}>
              Quarto
              <div className="modalQuarto msgModalModulos">
                <h4>Quarto Modulo</h4>(back-end avançado)
              </div>
            </li>
          </ul>
          <input type="password" placeholder="password" {...register("password")} />
          <span className="msgError">{errors.password?.message}</span>
          <input
            type="password"
            placeholder="Confirmar password"
            {...register("confirmapassword")}
          />
          <span className="msgError">{errors.confirmapassword?.message}</span>
          <button className="cadastrar" type="submit">
            Cadastrar
          </button>
          
        </form>
      </ContainerForm>
    </Container>
  );
};
export default Cadastro;
