import { Link } from "react-router-dom";
import "./style.css";
import { useParams } from "react-router-dom";
import sucesso from "../../assets/images/sucesso.png";
export const Home = () => {
  const params = useParams();
  return (
    <div className="divPai">
      <div className="sucesso">
        <div>Login realizado com sucesso!</div>
        <img src={sucesso} alt="sucesso"></img>
      </div>
      <div className="container">
        <h3>Bem vindo! {params.id}</h3>
        <Link to="/">Voltar ao login</Link>
      </div>
    </div>
  );
};
