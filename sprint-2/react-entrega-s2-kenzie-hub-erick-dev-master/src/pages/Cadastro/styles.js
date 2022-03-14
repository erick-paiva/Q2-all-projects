import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 20px;

`;
export const ContainerForm = styled.div`
  margin-top: 20px;
  border: 2px solid #f5f5f5;
  min-height: 330px;
  min-width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: white;

  form {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 15px;
  }
  input {
    margin: 0;
    height: 40px;
    width: 275px;
    padding-left: 8px;
  }
  .cadastrar {
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
  .cadastrar:hover {
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
    margin: 8px 0;
    font-size: 12px;
  }
  .lista-Modulos {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
    z-index: 0;
  }
  .lista-Modulos li {
    height: 40px;
    width: 70px;
    margin: 0 7px;
    font-size: 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 11px;
    color: var(--azul);
    border-radius: 8px;
    cursor: pointer;
  }
  .lista-Modulos li:hover {
    background: #eeecfe;
    .msgModalModulos {
      display: block;
      margin-top: 43px;
    }
  }
  .msgModalModulos {
    padding: 5px;
    color: var(--cinza);
    display: none;
    position: absolute;
    background: white;
    margin: 0;
    width: 160px;
    height: 40px;
    font-size: 12px;
    font-style: italic;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
  .msgModalModulos h4 {
    color: var(--cinzaClaro);
    font-style: normal;
  }
`;
