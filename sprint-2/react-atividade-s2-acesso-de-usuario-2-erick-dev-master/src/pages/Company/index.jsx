import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./style.css"
const Customer = ({ members }) => {
  const params = useParams();
  const member = members.find((id) => id.id === params.id);
  return (
    <div className="principal">
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
