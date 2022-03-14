import styled from "styled-components";

export const Container = styled.div`
  height: 250px;
  width: 300px;
  display: flex;
  background: #000fe596;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;

  h1 {
    color: red;
  }
  button {
        margin-top: 20px;
        border: none;
        cursor: pointer;
        background: red;
        border-radius: 10px;
        height: 30px;
        width: 130px;
        font-size: 17px;
        color: #2900ff;
        font-weight: 700;
    }
`;
