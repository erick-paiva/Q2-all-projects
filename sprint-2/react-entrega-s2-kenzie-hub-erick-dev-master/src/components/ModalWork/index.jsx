import { useState } from "react";
import { toast } from "react-toastify";
import "./styles.css"
const ModalWork = ({adcionarTrabalho, exibirWork, setExibirWork}) => {
    const [title, settitle] = useState("")
    const [description, setDescription] = useState("")

    const verificador = () => {
        if(title && description !== ""){
            adcionarTrabalho({"title":title,"description":description,"deploy_url": "https://kenziehub.me"})
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
    <div className="ContainerWork">
      <div className="formWork">
      <div className="tituloCadastrar">
          <h4>Cadastrar Trabalho</h4>
          <span className="sair" onClick={() => setExibirWork(!exibirWork)}>
            X
          </span>
        </div>
      <input className="inp1" placeholder="Nome da Tech" onChange={(e) => settitle(e.target.value)} />
      <input className="inp2" placeholder="Descriçao trabalho" onChange={(e) => setDescription(e.target.value)} />
   
      <button onClick={() => verificador() } >Cadastrar</button>
      </div>
    </div>
  );
};
export default ModalWork