import { useState } from 'react';
import './App.css';
import Lista from './components/Lista';

function App() {
  const todas_Frutas = [{ name: "banana", color: "yellow", price: 2 },
  { name: "melao", color: "yellow", price: 10 },
  { name: "cherry", color: "red", price: 3 },
  { name: "strawberry", color: "red", price: 4 }]

  const [fruits, setFruits] = useState(todas_Frutas);
  const totalPrice = fruits.reduce((a,b) => {return a + b.price},0)

  const mostarFrutas = (cor) =>{
    return ( todas_Frutas.filter(fruta => fruta.color === cor) )
  }
  const todasFrutas = () =>{
    return (todas_Frutas)
  }
  return (
    <div className="App">
        <h2>Total price: {totalPrice} </h2>
        <Lista classe="lista" fruits={fruits}/>
        <nav className="divFrutas">
          <button className="todas" onClick={() => setFruits(todasFrutas)}>Exibir Frutas</button>
          <button className="vermelhas" onClick={() => setFruits(mostarFrutas("red"))}>Exibir Frutas vermelhas</button>
          <button className="amarelas" onClick={() => setFruits(mostarFrutas("yellow"))}>Exibir Frutas amarelas</button>
        </nav>
    </div>
  );
}

export default App;
