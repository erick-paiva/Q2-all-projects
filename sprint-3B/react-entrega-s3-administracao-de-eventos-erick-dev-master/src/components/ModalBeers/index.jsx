import { useState, useEffect } from "react";
import toast from "react-hot-toast"
import ReactModal from "react-modal";
import { useCasamento } from "../../providers/casamento";
import { useConfraternizacao } from "../../providers/Confraternizacao";
import { useFormatura } from "../../providers/formatura";
import "./styles.css";
const ModalBeers = ({ isOpen, setIsOpen, bebida }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const [selecionado, setSelecionado] = useState("");
  const { addBebidasFormatura } = useFormatura();
  const { addBebidasCasamento } = useCasamento();
  const { addBebidasConfraternizacao } = useConfraternizacao();
  
  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);
  const enviarBebidas = () => {
    toast.success('Bebida enviada com Sucesso!')
    if (selecionado === "formatura") {
      addBebidasFormatura(bebida);
    }else if(selecionado === "confraternizacao"){
        addBebidasConfraternizacao(bebida)
    }else{
        addBebidasCasamento(bebida)
    }
  };
  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      className="modalBeears"
      style={{
        overlay: {
          backgroundColor: "rgba(51, 51, 51, 0.5)",
        },
      }}
    >
      <div className="sair">
        <h3>Para onde vai essa bebida?</h3>
        <span onClick={() => setIsOpen(!isOpen)}>X</span>
      </div>
      <select className="selectModal" onChange={(evt) => setSelecionado(evt.target.value)}>
        <option value="casamento">Casamento</option>
        <option value="confraternizacao">Confraternização</option>
        <option value="formatura">Formatura</option>
      </select>
      <button onClick={enviarBebidas}>Enviar</button>
    </ReactModal>
  );
};

export default ModalBeers;
