import { createContext, useContext, useState } from "react";

export const ConfraternizacaoContext = createContext();

export const ConfraternizacaoProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([])
    const addBebidasConfraternizacao = (novaBebida) =>{
        setBebidas([...bebidas,novaBebida])

    }
    const removeBebidasConfraternizacao = (index) =>{
        setBebidas(bebidas.filter((e, ind) => ind !== index))

    }

  return (
    <ConfraternizacaoContext.Provider value={{bebidas, addBebidasConfraternizacao,removeBebidasConfraternizacao }}>
      {children}
    </ConfraternizacaoContext.Provider>
  )
};
export const useConfraternizacao = () => useContext(ConfraternizacaoContext);
