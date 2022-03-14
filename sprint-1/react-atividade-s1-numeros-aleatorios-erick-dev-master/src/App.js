import './App.css';
import {useState} from "react"

function App() {
  const [num,setNum] = useState(0)
  return (
    <div className="App">
      <div className="App-header">
        <h1>{num}</h1>
        <button className="button" onClick={() => setNum(Math.floor(Math.random() * 101))}>Criar novo numero</button>
      </div>
    </div>
  );
}

export default App;
