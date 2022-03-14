import { useState } from "react";
import { toast } from "react-toastify";
import "./styles.css";

const ModalEditarApagarWork = ({editarTrabalho,apagarTrabalho, visible, setVisible, e}) => {
    const [title, settitle] = useState("")
    const [description, setDescription] = useState("")

    const verificador = () => {
        if(title && description !== ""){
          editarTrabalho(e.id ,{"title":title,"description":description})
        }else{
            toast.error('escreva algo para adcionar!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
     

  return (
    <>
    {visible && <div id="ContainerWork">
      <div className="formWork">
      <div className="tituloCadastrar">
          <h4>Atualizar trabalho</h4>
          <span className="sair" onClick={() => setVisible(!visible)}>
            X
          </span>
        </div>
      <input className="inp1" placeholder="Nome da Tech" onChange={(e) => settitle(e.target.value)} />
      <input className="inp2" placeholder="Descriçao trabalho" onChange={(e) => setDescription(e.target.value)} />
      <div id="containerButton">
      <button className="bt1" onClick={() => verificador() } >Salvar alteraçoes</button>
      <button className="bt2" onClick={() => apagarTrabalho(e.id) } >Excluir</button>
      </div>
      </div>
    </div>}
    </>
  );
};
export default ModalEditarApagarWork;
