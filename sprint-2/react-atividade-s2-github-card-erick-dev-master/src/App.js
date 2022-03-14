import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Input } from "./components/Input";
import { Card } from "./components/Card";
function App() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState({});
  const [colorError, setColorError] = useState("")
  const [show, setShow] = useState(false);
  const [msgError,setMsgError] = useState("")

  const buscar = () => {
    axios
      .get(`https://api.github.com/repos/${text}`)
      .then((resp) => {
        setResponse(resp);
        setShow(true);
        setMsgError("");
        setColorError("")
      })
        .catch(() => {setColorError("red");setMsgError("erro na busca do repositorio!")});
  };
  return (
    <div className="App">
      <div className="areaBusca">
        <Input colorError={colorError} buscar={buscar} msgError={msgError} setText={setText} />
        {show && <Card reposta={response} />}
      </div>
    </div>
  );
}

export default App;
