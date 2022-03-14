import styled from "styled-components";

export const SectionBeers = styled.section`
  .ulListBeers , .ulListBeersEvents{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin-top: 30px;
    li {
        background: white;
    display: flex;
    box-sizing: border-box;
    width: 280px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    margin: 20px 15px;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    justify-content: space-between;
    cursor: pointer;
    
      figure {
        img {
          height: 80px;
        }
      }
      h2{
    margin: 15px 0;
    font-size: 20px;
    font-weight: 100;
      }
      h3{
    margin: 10px 0;
    font-size: 16px;
    font-weight: 100;
      }
      p {
        display: -webkit-box;
        max-width: 100%;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    li:hover {
        box-shadow: 0 0px 10px 10px #00000096;
    }
  }
`;
