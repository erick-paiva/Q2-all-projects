import { useState } from "react";
import { toast } from "react-toastify";
import "./styles.css";
const ModalEditarApagarTech = ({apagarTech,id,setVisible,visible,editarTech}) => {
  const [nivelTech, setNivelTech] = useState("");


  const verificador = () => {
    if (nivelTech !== "") {
      editarTech(id,{"status": nivelTech })
    } else {
      toast.error("Selecione algo!", {
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
    <>
    {visible && <div id="containerTechModalLista">
      <div className="TechModalLista">
        <div className="tituloCadastrarLista">
          <h4>Cadastrar Tecnologia</h4>
          <span className="sair" onClick={() => {setVisible(!visible)}}>
            X
          </span>
        </div>
        <h3 className="subh3"> Selecionar Status: </h3>
        <ul className="listaTechUl">
          <li onClick={() => setNivelTech("iniciante")}>iniciante</li>
          <li onClick={() => setNivelTech("intermediario")}>intermediario</li>
          <li onClick={() => setNivelTech("avançado")}>avançado</li>
        </ul>
        <div id="botoesEditar">
          <button className="bt1" onClick={() => {verificador()}}>Salvar Alteraçoes</button>
          <button className="bt2" onClick={() => {apagarTech(id)}}>Excluir</button>
        </div>
        
      </div>
    </div>}
    </>
  );
};
export default ModalEditarApagarTech;
