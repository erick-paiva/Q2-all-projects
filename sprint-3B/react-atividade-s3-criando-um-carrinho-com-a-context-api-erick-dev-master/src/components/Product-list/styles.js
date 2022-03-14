import styled from "styled-components";

export const Container = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  h2 {
    color: honeydew;
    margin: 10px 0;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
        font-weight: bold;
      color: #fff60f;
      box-sizing: border-box;
      padding: 0 10px;
      height: 40px;
      border-radius: 6px;
      margin-top: 10px;
      background: red;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }
  }
`;
export const List = styled.div`
  display: flex;
  border-radius: 5px;
  background: #1b1ba6;
  .catalogo {
    padding: 15px;
    box-sizing: border-box;
    margin: 0;
  }
  .catalogoFilho {
    padding: 0 10px;
    li {
      background: green;
    }
    width: 400px;
    margin: 0;
  }
  .carrinho {
    padding: 15px;
    box-sizing: border-box;
    width: 400px;
    margin: 0;
    li {
      width: 100%;
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
`;
