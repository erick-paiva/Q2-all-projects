import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { api } from "../Services";

interface IChildren {
  children: ReactNode;
}
interface Iuser {

    email: string;
    name: string;
    id: number;

}
interface AuthState {
  accessToken: string;
  user: Iuser;
}
interface SignInCredentials {
  email: string;
  password: string;
}

// interface IBearer {
//   headers: {
//     Authorization: string;
//   };
// }
interface IsignUp {
  name: string;
  email: string;
  password: string;
}
interface AuthContextData {
  signIn: ({ email, password }: SignInCredentials) => Promise<void>;
  accessToken: string;
  signOut: () => void;
  signUp: ({ name, email, password }: IsignUp) => void;
  user: Iuser;
}

const AuthProviderContext = createContext<AuthContextData>(
  {} as AuthContextData
);

const useAuth = () => {
  const context = useContext(AuthProviderContext);

  if (!context) {
    throw new Error("useAuth must be used an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: IChildren) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem("@Hamburgueria:user");
    const accessToken = localStorage.getItem("@Hamburgueria:accessToken");
    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const history = useHistory();

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post("/login", { email, password });
      const { accessToken, user } = response.data;
      localStorage.setItem("@Hamburgueria:accessToken", accessToken);
      localStorage.setItem("@Hamburgueria:user", JSON.stringify(user));
      setData(response.data);
      toast.success(`Bem vindo ${user.name}`);
    } catch {
      toast.error("Email ou senha invalidos!");
    }
  };

  const signOut = () => {
    localStorage.removeItem("@Hamburgueria:accessToken");
    localStorage.removeItem("@Hamburgueria:user");

    setData({} as AuthState);
  };

  const signUp = ({ name, email, password }: IsignUp) => {
    api
      .post("/register", { name, email, password })
      .then(() => {
        history.push("/");
        toast.success("Cadastro efetuado com sucesso!");
      })
      .catch(() => toast.error("Email ja esta em uso!"));
  };

  return (
    <AuthProviderContext.Provider
      value={{ signIn, accessToken: data.accessToken, user:data.user, signOut, signUp }}
    >
      {children}
    </AuthProviderContext.Provider>
  );
};

export { AuthProvider, useAuth };
