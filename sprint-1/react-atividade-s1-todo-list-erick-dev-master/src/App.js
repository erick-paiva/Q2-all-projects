import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [lista,setLista] = useState([])
  const addTodo = (newTodo) =>{
    if(!lista.includes(newTodo) && newTodo !== ""){
      setLista([...lista,newTodo])
    }
}
  const handleTodo = (item) =>{
  setLista(lista.filter((valor) => valor !== item))
}

  return (
    <div className="App-header">
      <div className="toDolist">
        <Form addTodo={addTodo}/>
        <TodoList arr={lista} handleTodo={handleTodo}/>
      </div>
    </div>
  );
}

export default App;
