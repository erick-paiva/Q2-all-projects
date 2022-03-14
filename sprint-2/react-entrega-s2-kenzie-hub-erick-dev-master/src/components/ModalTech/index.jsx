import { useState } from "react";
import { toast } from "react-toastify";
import "./styles.css";
const ModalTech = ({ adcionarTech, setExibirTech, exibirTech }) => {
  const [nivelTech, setNivelTech] = useState("");
  const [titulo, setTitulo] = useState("");

  const verificador = () => {
    if (nivelTech && titulo !== "") {
      adcionarTech({ title: titulo, status: nivelTech });
    } else {
      toast.error("escreva algo para adcionar!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="containerTechModal">
      <div className="TechModal">
        <div className="tituloCadastrar">
          <h4>Cadastrar Tecnologia</h4>{" "}
          <span className="sair" onClick={() => setExibirTech(!exibirTech)}>
            X
          </span>
        </div>
        <input
          placeholder="Nome da Tech"
          onChange={(e) => setTitulo(e.target.value)}
        />
        <h3 className="subh3"> Selecionar Status: </h3>
       
        <ul className="listaTechUl">
          <li onClick={() => setNivelTech("iniciante")}>iniciante</li>
          <li onClick={() => setNivelTech("intermediario")}>intermediario</li>
          <li onClick={() => setNivelTech("avançado")}>avançado</li>

        </ul>
        <button onClick={() => verificador()}>Cadastrar</button>
      </div>
    </div>
  );
};
export default ModalTech;
