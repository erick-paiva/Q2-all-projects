import "./App.css";
import Input from "./components/Input";
import User from "./components/User";

function App() {
  return (
    <div className="App-header">
      <div className="container">
        <User />
        <Input />
      </div>
    </div>
  );
}

export default App;
