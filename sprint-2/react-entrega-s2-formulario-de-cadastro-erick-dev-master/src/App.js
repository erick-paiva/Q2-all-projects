import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Switch, Route} from "react-router";
import "./App.css";
import { useHistory } from "react-router";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

function App() {
  const history = useHistory()
  const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(10, "No minimo 10 caracteres")
    .required("Campo Obrigatório")
    .matches(/^([\w]{3,})+\s+([\w\s]{3,})+$/i, "Somente letras e o nome completo"),
    email: yup.string().email("Email Invalido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Senha fraca! adcione letras, numeros e caracteres especiais")
      .required("Campo Obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Mínimo de 8 digitos, um caracter especial e uma letra maiúscula"
      ),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Senha não confere")
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    history.push(`/home/${data.name}`)
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login handleSubmit={handleSubmit} onSubmitFunction={onSubmitFunction} register={register} errors={errors} />
        </Route>
        <Route exact path="/home/:id">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
