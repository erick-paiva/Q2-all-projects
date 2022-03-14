import ButtonEstilizado from "../ButtonEstilizado";
// import { SectionBeers } from "./styles";
// import {SectionBeers} from "../ListBeers/styles"
import toast from "react-hot-toast"
import { SectionBeers } from "../ListBeers/styles";
const ListBeersEvents = ({bebidas, setBebidas}) => {


  const handleClick = (index) => {
    toast.success('Bebida removida com Sucesso!')
    setBebidas(index)
  }
  return (
    <SectionBeers>
      <ul className="ulListBeersEvents">
        {bebidas.map((ele, index) => (
          <li key={index}>
            <figure>
              <img src={ele.image_url} alt={ele.name} />
            </figure>
            <h2>{ele.name}</h2>
            <h3>Fabricado no ano: {ele.first_brewed}</h3>
            <p>{ele.description}</p>
            <h4>Quantidade de litros: {ele.boil_volume.value}</h4>
            <ButtonEstilizado text={"Remover"} callBack={handleClick} index={index}/>
          </li>
        ))}
      </ul>
    </SectionBeers>
  );
};
export default ListBeersEvents;
