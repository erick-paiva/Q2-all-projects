import { useState } from "react";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import GlobalStyles from "./styles/global";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState("");
  const [listUsers, setListUsers] = useState<User[]>([]);
  const [msgError, setMsgError] = useState<boolean>(false);
  const user = {
    name,
    age,
    hobby,
  };
  const handleClick = () => {
    name && age > 0 && hobby
      ? setListUsers([...listUsers, user])
      : setMsgError(true);
  };
  return (
    <div className="App">
      <div className="cadastro">
        <h1>Cadastrar um novo usuario</h1>
        <Input
          placeholder="Seu nome"
          onChange={(e) => {
            setName(e.target.value);
            setMsgError(false);
          }}
        />
        <Input
          placeholder="Sua idade"
          type="number"
          onChange={(e) => {
            setAge(parseInt(e.target.value));
            setMsgError(false);
          }}
        />
        <Input
          placeholder="Seu hobby"
          onChange={(e) => {
            setHobby(e.target.value);
            setMsgError(false);
          }}
        />
        {msgError && <h2>Adcione todos os dados para cadastrar!</h2>}
        <button onClick={handleClick}>Cadastrar</button>
      </div>
      <ul>
        {listUsers.map((ele) => (
          <Card user={ele} key={ele.name} />
        ))}
      </ul>
      <GlobalStyles />
    </div>
  );
}

export default App;
