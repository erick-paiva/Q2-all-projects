import styled from "styled-components";

export const Container = styled.div`
   margin: 0 20px;
  input {
    border: 1px solid ${(props) => `${props.colorError}`};
    outline: none;
    width: 300px;
    height: 20px;
    margin-top: 30px;
  }
  button{
      height: 24px;
      padding: 0 5px;
      border: none;
      cursor: pointer;
      background-color: #0ec1ff;
      color: white;
      font-size: 13px;
      font-weight: bold;
  }
  .msgError{
      color: red;
      font-size: 13px;
      margin: 10px 0;
  }
`;
