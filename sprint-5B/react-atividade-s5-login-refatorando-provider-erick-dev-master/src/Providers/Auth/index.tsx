import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

interface AuthChildren{
    children : ReactNode;
}
interface UserData {
    email: string;
    password: string;
}
interface AuthProviderData {
    authToken: string;
    Logout: () => void;
    signIn: (userData: UserData) => void
}
const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children } : AuthChildren) => {
  const history = useHistory();
  
  // Dessa forma adicionamos ao state o token caso ele exista no localStorage
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  // Função para logar na aplicação, recebe os dados pegos do form de login
  const signIn = (userData: UserData) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        // setamos no localStorage o token, caso tenhamos a resposta esperada
        localStorage.setItem("token", response.data.token);
        // setamos no state o token, caso tenhamos a resposta esperada
        setAuthToken(response.data.token);
        // redirecionamos para a página logado
        history.push("/dashboard");
        toast.success(`bem vindo ${response.data.user.name}`)
      })
      .catch(() => toast.error("Usuario ou senha Invalidos!"));
  };

  // Função para deslogar da aplicação
  const Logout = () => {
    // limpando o localStorage
    localStorage.clear();
    // limpando o state
    setAuthToken("");
    // redirecionando para login
    history.push("/login");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);