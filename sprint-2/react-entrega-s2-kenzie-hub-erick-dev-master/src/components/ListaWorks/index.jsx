import ModalEditarApagarWork from "../ModalEditarApagarWork"
import "./styles.css"
import { useState } from "react"

const ListaTechs = ({apagarTrabalho,jobs,e ,editarTrabalho}) => {
    const [visible, setVisible] = useState(false)

    return(
      <li className="itensWorks" key={e.id} onClick={() => {visible !== true && setVisible(true)}}>
        <ModalEditarApagarWork visible={visible} setVisible={setVisible} apagarTrabalho={apagarTrabalho} editarTrabalho={editarTrabalho} e={e} />
              <div className="iconWork"> </div>
            <div>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
            </li>
    )
}

export default ListaTechs