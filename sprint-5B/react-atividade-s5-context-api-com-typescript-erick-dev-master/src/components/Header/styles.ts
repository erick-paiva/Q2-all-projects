import styled from "styled-components";

export const Container = styled.header`
  background: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 60px;
  h1 {
    margin: 0;
    color: red;
    font-weight: 400;
    cursor: pointer;
  }
  a{
    display: flex;
    text-decoration: none;
    color: red;
  }
  span{
    background: yellow;
    display: flex;
    width: 17px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    height: 19px;
  }
`;
