import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

export const GetApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    api.get("/beers").then(resp => setBebidas(resp.data))

  },[]);

  return (
    <GetApiContext.Provider value={{ bebidas }}>
      {children}
    </GetApiContext.Provider>
  )
};
export const useData = () => useContext(GetApiContext);
