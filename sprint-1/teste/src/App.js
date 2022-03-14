import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  const users = {erick:"erick",maria:"maria",joao:"joao"}
  return (
    <div className="App">
      <div className="App-header">
      <PersonCard name={users.erick}/>
      <PersonCard name={users.maria}/>
      <PersonCard name={users.joao}/>
      </div>
    </div>
  );
}

export default App;
