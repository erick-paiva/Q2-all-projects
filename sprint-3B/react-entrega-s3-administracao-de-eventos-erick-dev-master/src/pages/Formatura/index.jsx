import Header from "../../components/Header";
import ListBeersEvents from "../../components/listBeersEvents";
import SemBebidas from "../../components/SemBebidas";
import { useFormatura } from "../../providers/formatura";
const Formatura = () => {
  const { bebidas, removeBebidasFormatura } = useFormatura();
  return (
    <section>
      <Header />
      {bebidas.length > 0 ? (
        <ListBeersEvents
          bebidas={bebidas}
          setBebidas={removeBebidasFormatura}
        />
      ) : (
        <SemBebidas />
      )}
    </section>
  );
};

export default Formatura;
