import './App.css';
import { Switch ,Route } from 'react-router';
import { members } from './arrayMembers';
import Company from "./pages/Company"
import Customer from './pages/customer';
import Home from './components/ Home';

function App() {
  console.log(members)
  return (
    <div className="App-header">
      <Switch>
        <Route exact path="/" >
          <Home members={members} />
        </Route>
        <Route exact path="/customer/:id" >
          <Customer members={members} />
        </Route>
        <Route exact path="/company/:id" >
          <Company members={members} />
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
