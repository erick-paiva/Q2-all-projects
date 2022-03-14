import { createContext, useContext, useState } from "react";

export const CasamentoContext = createContext();

export const CasamentoProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([])
    const addBebidasCasamento = (novaBebida) =>{
        setBebidas([...bebidas,novaBebida])

    }
    const removeBebidasCasamento = (index) =>{
        setBebidas(bebidas.filter((e, ind) => ind !== index))

    }


  return (
    <CasamentoContext.Provider value={{bebidas, addBebidasCasamento, removeBebidasCasamento }}>
      {children}
    </CasamentoContext.Provider>
  )
};
export const useCasamento = () => useContext(CasamentoContext);
