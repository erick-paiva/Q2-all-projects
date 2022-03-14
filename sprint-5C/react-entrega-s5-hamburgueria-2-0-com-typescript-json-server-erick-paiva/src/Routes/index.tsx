import { Switch } from "react-router-dom"
import {Route} from "./Route"
import { Login } from "../Pages/Login"
import { Signup } from "../Pages/Signup"
import { Dashboard } from "../Pages/Dashboard"

export const Routes = () => {

    return(
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    )
}