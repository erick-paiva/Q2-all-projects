import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./style.css";
const Customer = ({ members }) => {
  const params = useParams();
  const member = members.find((e) => e.id === params.id);
  return (
    <div className="principal">
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
