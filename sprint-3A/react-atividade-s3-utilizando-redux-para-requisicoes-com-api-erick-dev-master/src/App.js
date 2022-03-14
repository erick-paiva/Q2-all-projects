import "./App.css";
import Digimons from "./components/Digimons";
import Search from "./components/Search";


function App() {
  return (
    <div className="App-header">
      <div className="container">
        <Search />
        <Digimons />
      </div>
    </div>
  );
}

export default App;
