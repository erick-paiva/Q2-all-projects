import { Route, Switch } from "react-router"
import { Carrinho } from "../components/Carrinho"
import { ListProductsPage } from "../pages/ListProductsPage"

export const Routes = () => {

    return(
        <Switch>
            <Route exact path="/">
                <ListProductsPage/>
            </Route>
            <Route exact path="/carrinho">
                <Carrinho />
            </Route>
        </Switch>
    )
}