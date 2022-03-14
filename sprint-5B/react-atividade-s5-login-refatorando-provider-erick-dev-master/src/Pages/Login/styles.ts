import styled from "styled-components";

export const Container = styled.div`
  h1 {
    color: #fff900;
  }

  }
`;

export const FormStyled = styled.form`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 320px;
  width: 250px;
  background: #ffc1078a;
  border-radius: 15px;

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

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h4 {
      margin: 10px 0;
    }
    input{
        border: none;
        border-radius: 5px;
        height: 33px;
        padding-left: 10px;
    }
`;
