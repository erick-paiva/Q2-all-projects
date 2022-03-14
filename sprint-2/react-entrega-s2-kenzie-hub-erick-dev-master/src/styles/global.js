import {createGlobalStyle} from "styled-components"
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: Inter , monospace;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
    }
    :root{
        --azul:#403CAA;
        --verde: #11995E;
        --cinza: #333333;
        --cinzaClaro: #999999;
        --branco: #F5F5F5;

    }
    body{
        min-height: 100vh;
        /* background: var(--branco); */
        display: flex;
        justify-content: center;
        align-items: center;
    }
`