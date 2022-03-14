import { Header } from "../../components/Header"
import { ListProducts } from "../../components/ListProducts"
import { Container } from "./styles"

export const ListProductsPage = () => {

    return(
        <Container>
            <Header/>
            <ListProducts/>
        </Container>
    )
}