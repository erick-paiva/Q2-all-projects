import styled from "styled-components";

export const Container = styled.div`
  min-height: 340px;
  width: 350px;
  border: 2px solid #4b4b87;
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 130px;
  }
  h2 {
    font-size: 18px;
  }
  button {
    margin-top: 15px;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
    height: 40px;
    border-radius: 8px;
  }
`;
