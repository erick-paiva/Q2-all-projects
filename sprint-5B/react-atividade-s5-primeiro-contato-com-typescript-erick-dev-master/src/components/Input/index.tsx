import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

export const Input = ({ placeholder, label, ...rest }: InputProps) => (
  <Container>
    {label && <label>{label}</label>}
    <input {...rest} placeholder={placeholder}/>
  </Container>
);
