
import { useHistory } from "react-router";
import "./styles.css"
const ModalCadastro = ({setModalVisible,modal}) => {
    const history = useHistory()

  return (
    <div className="ContainerMsgSucesso">
      <div className="msgAvisoSucessoCadastro">
        <div><h4>Sucesso</h4> <span className="sair"  onClick={() => setModalVisible(!modal)}>X</span></div>
      
      <h2>Yeesss!</h2>
      <p>Tudo certinho, seu cadastro deu bom demais</p>
      <p>Agora basta fazer seu login e começar sua jornada...</p>
      <button className="buttonCadastro" onClick={() => history.push("/")}>Ir para login</button>
      </div>
    </div>
  );
};
export default ModalCadastro