import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background: var(--branco);
  padding: 0 20px;
  header {
    margin-top: 15px;
    height: 80px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    div{
      background: white;
    }
  }
  figure img {
    height: 40px;
    border-radius: 100%;
   
  }
  .tecs {
    box-sizing: border-box;
    width: 100%;
    min-height: 250px;
    border-radius: 5px;
    margin-top: 30px;
    background: white;
    padding: 18px 15px;
  }
  .dadosUser {
    min-width: 290px;
    min-height: 400px;
    border-radius: 5px;
    margin-top: 30px;
    background: white;
    button{
      border: none;
      background:#F5F5F5;
      color: var(--cinza);
      width: 100%;
      height: 40px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .headTecs {
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .headTecs img{
    cursor: pointer;
  }
  .imgWork{
    fill: #456f9c;
  }
  .headUser {
    padding: 15px;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: var(--azul);
    color: white;
    border-radius: 10px 10px 0px 0px;
    height: 90px;
    div {
      background: var(--azul);
      height: 80px;
      h3{
        margin: 5px 0 0;
        font-size: 18px;
        font-weight: bold;

      }
      h4{
        margin: 4px 0 0;
        font-size: 12px;

        font-weight: normal;
      }
      h5{
        background: none;
        font-size: 12px;
        font-family: Inter, monospace;
        font-weight: 400;
        line-height: 1.66;
        color: rgb(153, 153, 153);
      }
    }
    img {
      height: 70px;
      border-radius: 100%;
    }
  }
  .controlUser{
    padding: 15px 30px;
    div{
      border-radius: 5px;
    }
    button{
      margin-top: 20px;
      border-radius: 8px;
      height: 60px;
    }
    button:hover{
      border: 2px solid #333333; 
    }
  }
  .NameContact{
    margin-bottom: 15px;
    padding: 15px;
    display: flex;
    background: rgba(64, 60, 170, 0.1) ;
    div{
      margin: 0 0 0 15px;
      h3{
        margin-bottom: 10px;
        font-size: 14px;
      }
      p{
        font-size: 12px;
        color: #999999;
      }
    }
  }
  .Email{
    padding: 15px;
    display: flex;
    background: rgba(64, 60, 170, 0.1) ;
    div{
      margin: 0 0 0 15px;
      h3{
        margin-bottom: 10px;
        font-size: 14px;
      }
      p{
        font-size: 12px;
        color: #999999;
      }
    }
  }
  #techs{
    width: 100%;
    align-items: flex-start;
  }

  .itensWorks{
    border-right: 4px solid #F5F5F5;
    display: flex;
    margin-bottom: 15px;
  }
  .itensWorks:hover{
    border-right: 4px solid var(--azul);
  }
  .itensWorks div{
    margin: 0 0 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .itensWorks div h3{
    font-weight: bold;

  }
  .itensWorks div p{
    color: #999999;

  }

  @media (min-width: 1024px) {
    padding: 0 50px;
    #techs{
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
  }


  
  .tecs{
    width: 380px;
    
  }
  .dadosUser{
    min-width: 270px;
  }
  }
`;
