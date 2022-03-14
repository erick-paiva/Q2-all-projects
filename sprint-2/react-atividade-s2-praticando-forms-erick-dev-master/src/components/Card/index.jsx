import { Link } from "react-router-dom";
import "./style.css"
const Card = ({ user }) => {
  return (
    <div className="dadosUser">
      <h1>Seus dados cadastrais</h1>
      <p>
        Seu nome completo: <span className="detalhes">{user.nomeUsuario}</span>{" "}
      </p>
      <p>
        Apelido: <span className="detalhes">{user.apelido}</span>{" "}
      </p>
      <p>
        Email: <span className="detalhes">{user.email}</span>{" "}
      </p>
      <p>
        Telefone: <span className="detalhes">{user.telefone}</span>{" "}
      </p>
      <p>
        Data de aniversario: <span className="detalhes">{user.dataAniversario}</span>{" "}
      </p>
      <p>
        Sua senha: <span className="detalhes">{user.senha}</span>{" "}
      </p>

      <div className="voltar"><Link to={"/"}>Voltar</Link></div>
    </div>
  );
};

export default Card;
