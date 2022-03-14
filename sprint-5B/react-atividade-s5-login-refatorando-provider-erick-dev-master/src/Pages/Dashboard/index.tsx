import { useAuth } from "../../Providers/Auth"
import { Container } from "./styles"


export const Dashboard = () => {
    const {Logout} = useAuth()
    return(
        <Container>
            <h1>Dashboard</h1>
            <button onClick={Logout}>Sair</button>
        </Container>
    )
}