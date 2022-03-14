import { Route, Switch } from "react-router";
import Casamento from "../pages/Casamento";
import Confraternizacao from "../pages/Confraternizacao";
import Formatura from "../pages/Formatura";
import Inicio from "../pages/Inicio";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Inicio />
      </Route>
      <Route exact path="/formatura">
        <Formatura />
      </Route>
      <Route exact path="/casamento">
        <Casamento />
      </Route>
      <Route exact path="/confraternizacao">
        <Confraternizacao />
      </Route>
    </Switch>
  );
};

export default Routes;
