import Header from "../../components/Header";
import ListBeersEvents from "../../components/listBeersEvents";
import SemBebidas from "../../components/SemBebidas";
import { useConfraternizacao } from "../../providers/Confraternizacao";
const Confraternizacao = () => {
  const { bebidas, removeBebidasConfraternizacao } = useConfraternizacao();
  return (
    <section>
      <Header />
      {bebidas.length > 0 ? (
        <ListBeersEvents
          bebidas={bebidas}
          setBebidas={removeBebidasConfraternizacao}
        />
      ) : (
        <SemBebidas />
      )}
    </section>
  );
};

export default Confraternizacao;
