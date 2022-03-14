// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aumetar, diminuir } from "../../store/modules/result/action";
import "./styles.css";
const Contador = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.result);

  return (
    <div className="container">
      <span>
        <h3>{num}</h3>
      </span>
      <div>
        <button onClick={() => dispatch(aumetar(1))}>+</button>
        <button onClick={() => dispatch(diminuir(1))}>-</button>
      </div>
    </div>
  );
};

export default Contador;
