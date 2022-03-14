import { Container } from "./style"
// import { input } from "./style"
export const Input = ({setText,buscar,colorError,msgError}) =>{


    return(
        <Container colorError={colorError}>
            <input type="text" placeholder="Digige o nome do repositorio" onChange={(e) => setText(e.target.value)}/>
            <button onClick={buscar}>pesquisar</button>
            <p className="msgError">{msgError}</p>
        </Container>
    )
}