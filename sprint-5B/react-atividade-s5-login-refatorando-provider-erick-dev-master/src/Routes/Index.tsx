import { Route, Switch } from "react-router"
import { Dashboard } from "../Pages/Dashboard"
import { Login } from "../Pages/Login"

export const Routes = () => {

    return(
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}