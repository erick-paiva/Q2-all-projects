
import './App.css';
import { useState ,useEffect } from 'react';
import Characters from "./components/Characters"
// import Characters from "./components/Characters"

function App() {
  const [characterList,setCharacterList] = useState([])
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/").
    then(reposta => reposta.json()).
    then(resposta => setCharacterList(resposta.results)).catch(err => console.log(err))
    
  },[])
  console.log(characterList)
  return (
    <div className="App-header">
        <Characters personagens={characterList}/>
    </div>
  );
}

export default App;
