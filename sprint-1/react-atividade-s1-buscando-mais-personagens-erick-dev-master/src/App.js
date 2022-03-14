import './App.css';
import { useState ,useEffect } from 'react';
import Characters from "./components/Characters"

function App() {
  const [characterList,setCharacterList] = useState([])
  const [next,setNext] = useState("")
  const [proximaPage,setProximaPage] = useState([])
  const [prev,setPrev] = useState("")
  const [pageAtual,setPageAtual] = useState("https://rickandmortyapi.com/api/character/")
  useEffect(() => {
    fetch(pageAtual).
    then(reposta => reposta.json()).
    then(resposta => {setNext(resposta.info.next);setPrev(resposta.info.prev);setCharacterList(resposta.results)}).catch(err => console.log(err))
    
  },[pageAtual])
  useEffect(() => {
    fetch(next).
    then(resposta => resposta.json()).
    then(resposta => setProximaPage(resposta.results))
  },[next])
  return (
    <div className="App-header">
      <div className="controles">
        <button className="anterior" onClick={() => setPageAtual(prev)} >Previous</button>
        <button className="proximo" onClick={() => {setPageAtual(next); setCharacterList(proximaPage)}} >Next</button>
      </div>
        <Characters personagens={characterList}/>
    </div>
  );
}

export default App;
