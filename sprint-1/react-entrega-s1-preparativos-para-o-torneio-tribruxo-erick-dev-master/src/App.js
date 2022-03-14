import './App.css';
import {useState,useEffect} from "react"
import { aleatorio } from './cardsDistintos';
import Card from "./components/Card"
function App() {
  const [arr,setArr] = useState([])
  const [newArr,setNewArr] = useState([])
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
    .then(reposta => reposta.json())
    .then(resposta => setArr(resposta.filter((e) => e.hogwartsStudent === true))).catch(err => console.log(err))
    
  },[])
  function numAle () {
    setNewArr(aleatorio(arr))
}
console.log(arr.filter((e)=> e.house !== ""))

  return (
    <div className="App-header">
      {
        visible ?
      <>
        <Card arr={newArr}/>
        <button className="botao" onClick={() => numAle()} >Tentar Novamente</button>
      </>
      :
      <div className="menuInicial">
        <h1>Torneio tribruxo</h1>
        <h4>Click no botao para encontrar os feiticeiros!</h4>
        <button className="botaoComecar" onClick={() => {setVisible(true);numAle()}} >Começar!</button>
      </div>
      }
    </div>
  );
}

export default App;


