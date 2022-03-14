import { AllHTMLAttributes } from "react";
import { Container } from "./styles";

interface CardProps extends AllHTMLAttributes<HTMLDivElement> {
    user: User;
  }

interface User {
    name: string;
    age: number;
    hobby:string
}


export const Card = ({user}:CardProps) => (
  <Container>
    <h2>Nome: {user.name}</h2>
    <h3>Idade: {user.age}</h3>
    <h3>Hobby: {user.hobby}</h3>
  </Container>
);