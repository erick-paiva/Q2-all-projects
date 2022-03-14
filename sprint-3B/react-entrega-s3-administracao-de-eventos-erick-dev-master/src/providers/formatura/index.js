import { createContext, useContext, useState } from "react";

export const FormaturaContext = createContext();

export const FormaturaProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([])
    const addBebidasFormatura = (novaBebida) =>{
        setBebidas([...bebidas,novaBebida])

    }
    const removeBebidasFormatura = (index) =>{
      setBebidas(bebidas.filter((e, ind) => ind !== index))

  }

  return (
    <FormaturaContext.Provider value={{addBebidasFormatura,bebidas,removeBebidasFormatura }}>
      {children}
    </FormaturaContext.Provider>
  )
};
export const useFormatura = () => useContext(FormaturaContext);
