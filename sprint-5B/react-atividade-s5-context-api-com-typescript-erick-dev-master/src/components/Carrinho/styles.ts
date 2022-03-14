import styled from "styled-components";

export const Container = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-around;
  .totalCarrinho {
    width: 150px;
    height: 120px;
    display: flex;
    align-items: center;
    border: 2px solid black;
    justify-content: space-around;
    margin-top: 17px;
    flex-direction: column;
    button{
        background: blue;
        color: white;
        border: none;
        cursor: pointer;
        height: 40px;
        border-radius: 8px;
    }
  }
`;
