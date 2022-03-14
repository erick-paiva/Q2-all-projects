import { Route, Switch } from "react-router";
// import Home from "../pages/Cadastro";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import { useEffect, useState } from "react";

const Routes = () => {
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"))
    token && setAuth(true)
  } ,[auth])
  return (
    <Switch>
        <Route exact path="/">
          <Login auth={auth} setAuth={setAuth} />
        </Route>
        <Route exact path="/cadastro">
          <Cadastro auth={auth}/>
        </Route>
        <Route exact path="/home/users/:id">
          <Home auth={auth} setAuth={setAuth}/>
        </Route>
    </Switch>
  );
};

export default Routes;
