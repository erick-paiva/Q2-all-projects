import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerForm = styled.div`
  margin-top: 20px;
  border: 2px solid #f5f5f5;
  height: 400px;
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: white;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 30px 0;
    justify-content: space-around;
  }
  
  button {
    width: 275px;
    height: 40px;
    margin: 15px 0;
    background: var(--azul);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover{
    border: 2px solid #333333;
  }
  .button-Cadastrar {
    background: var(--branco);
    color: var(--cinzaClaro);
  }
  .button-Cadastrar:hover {
    border: 2px solid #333333;
  }
  .divMsg {
    font-size: 0.7rem;
    margin: 0;
    text-align: center;
    color: var(--cinzaClaro);
  }
  .divMsg p {
    color: var(--cinza);
  }
  .msgError {
    color: red;
    background: white;
  }
`;
