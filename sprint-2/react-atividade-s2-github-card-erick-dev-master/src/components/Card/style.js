import styled from "styled-components";

export const Container = styled.div`
  height: 250px;
  width: 500px;
  font-family: sans-serif;
  .resultado img {
    border: 1px solid black;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    margin: 0 15px 0 15px;
  }
  .resultado {
    color: black;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 100px;
    background-color: #eff1f5;
    border-radius: 15px;
    margin: 0 15px;
  }
  span {
    text-align: start;
  }
  p {
    margin: 0;
    font-size: 16px;
    color: gray;
  }
  h4 {
    margin: 0 0 10px;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: blue;
    font-size: 15px;
  }
`;
