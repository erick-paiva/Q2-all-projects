import { Route, Switch } from "react-router"
import CarrinhoCompras from "../pages/CarrinhoCompras"
import Inicio from "../pages/Inicio"

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/">
                <Inicio />
            </Route>
            <Route exact path="/carrinho">
                <CarrinhoCompras />
            </Route>
        </Switch>
    )
}

export default Routes