import Header from "../../components/Header";
import ListBeersEvents from "../../components/listBeersEvents";
import SemBebidas from "../../components/SemBebidas";
import { useCasamento } from "../../providers/casamento";

const Casamento = () => {
  const { bebidas,removeBebidasCasamento } = useCasamento();
  return (
    <section>
      <Header />
      {bebidas.length > 0 ? 
      <ListBeersEvents bebidas={bebidas} setBebidas={removeBebidasCasamento} />
: <SemBebidas/> }
    </section>
  );
};

export default Casamento;
