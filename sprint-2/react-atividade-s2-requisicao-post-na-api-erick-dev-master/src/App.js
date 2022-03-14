import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Switch, Route } from "react-router";
import "./App.css";
import { useHistory } from "react-router";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import axios from "axios";
import {useState } from "react";

function App() {
  const [user,setUser] = useState({})
  const [num,setNum] = useState(0)
  const history = useHistory()
  const requisicao = (user) =>{
  axios.post("https://kenzieshop.herokuapp.com/sessions/",user)
      .then(() => {
        setNum(1);
        setTimeout(() =>
          {history.push("/home")}
        ,2000);
      }).catch(() => {setNum(2)})
  }
  
  const formSchema = yup.object().shape({
    username: yup.string().min(5, "usuario deve ter pelo menos 5 caracteres").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(4, "a senha tem menos de 4 caracteres")
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
    setUser(data)
    requisicao(data)
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login handleSubmit={handleSubmit} onSubmitFunction={onSubmitFunction} register={register} errors={errors} />
          {num === 1 && <p className="msgSucesso">login efetuado com sucesso!</p>}
          {num === 2 && <p className="msgErro">Senha ou usuario incorretos!</p>}
        </Route>
        <Route exact path="/home">
          <Home user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
