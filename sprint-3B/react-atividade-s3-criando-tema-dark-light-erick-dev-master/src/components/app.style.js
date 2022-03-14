import styled from "styled-components";

export const AppContainer = styled.div`

    height: 37vh;
    display: flex;
    justify-content: center;
    padding: 30px;

    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};


`
export const MainSection = styled.div`
    text-align: center;
`
