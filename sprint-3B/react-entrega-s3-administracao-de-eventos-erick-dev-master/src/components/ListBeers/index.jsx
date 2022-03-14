import { useState } from "react";
import { useData } from "../../providers/data";
import { SectionBeers } from "./styles";
import ModalBeers from "../ModalBeers"
// import MaterialModal from "../MaterialModal";
const ListBeers = () => {
    const [bebida, setBebida] = useState([""])
    const [modalVisible, setModalVisible] = useState(false)
  const { bebidas } = useData();
  const exibirModal = () =>{
    setModalVisible(!modalVisible)
  }
  const hadleClick = (ele) => {
    setModalVisible(true)
    setBebida(ele)
  }
  return (
    <SectionBeers>
      <ul className="ulListBeers">
      <ModalBeers isOpen={modalVisible} setIsOpen={exibirModal} bebida={bebida} />
      {/* <MaterialModal open={modalVisible} setOpen={setModalVisible} bebida={bebida} /> */}
        {bebidas.map((ele, index) => (
          <li key={index} onClick={() => hadleClick(ele)} >
            <figure>
              <img src={ele.image_url} alt={ele.name} />
            </figure>
            <h2>{ele.name}</h2>
            <h3>Fabricado no ano: {ele.first_brewed}</h3>
            <p>{ele.description}</p>
            <h4>Quantidade de litros: {ele.boil_volume.value}</h4>
          </li>
        ))}
      </ul>
    </SectionBeers>
  );
};
export default ListBeers;
