import styled from "styled-components";
export const HeaderStyle = styled.header`
  height: 90px;
  background: blue;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0px 9px 8px #000000c4;
  justify-content: center;
  h1 {
    margin: 0;
    cursor: pointer;
  }
  span {
    display: flex;
    width: 450px;
    justify-content: space-between;
    cursor: pointer;
    font-size: 15px;
    flex-wrap: wrap;
    justify-content: center;
    h3{
      color: yellow;
      margin: 0 15px;
    }
  }
`;
