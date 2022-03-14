import { Container } from "./style";

export const Card = ({ reposta }) => {
  return (
    <Container>
      <div className="resultado">
        <img
          src={reposta.data.organization.avatar_url}
          alt={reposta.data.full_name}
        />

        <span>
          <h4>{reposta.data.full_name}</h4>
          <p>{reposta.data.description} <a href={reposta.data.clone_url} >visitar site</a></p>
         
        </span>
        
      </div>
    </Container>
  );
};
