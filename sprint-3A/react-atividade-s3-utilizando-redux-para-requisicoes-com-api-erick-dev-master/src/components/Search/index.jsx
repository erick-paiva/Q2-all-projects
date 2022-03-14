import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";
import "./styles.css"
const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const msgError = (msg) =>{
      toast.error(msg)
  }
  const pesquisar = () => {
      if(!input){
        return toast.error("Escreva algo!")
      }
      dispatch(addDigimonsThunk(input,msgError));
      setInput("");
  };
  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div className="pesquisar">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Procure seu Digimon"
        />
        <button onClick={pesquisar}>Pesquisar</button>
        <Toaster/>
      </div>
    </div>
  );
};
export default Search;
