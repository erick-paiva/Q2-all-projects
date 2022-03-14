import { CasamentoProvider } from "./casamento";
import { ConfraternizacaoProvider } from "./Confraternizacao";
import { ApiProvider } from "./data";
import { FormaturaProvider } from "./formatura";

const Providers = ({ children }) => {
  return (
    <ApiProvider>
      <FormaturaProvider>
        <CasamentoProvider>
          <ConfraternizacaoProvider> {children}</ConfraternizacaoProvider>
        </CasamentoProvider>
      </FormaturaProvider>
    </ApiProvider>
  );
};

export default Providers;
