import { useHistory } from "react-router";
import { HeaderStyle } from "./styles";
// import ButtonEstilizado from "../ButtonEstilizado"
const Header = () => {
    const history = useHistory()
  return (
    <HeaderStyle>
      <h1 onClick={() =>  history.push("/")}>Kenzie Beers</h1>
      <span>
  
        <h3 onClick={() => history.push("/formatura")}>Formatura</h3>
        <h3 onClick={() => history.push("/casamento")}>Casamento</h3>
        <h3 onClick={() => history.push("/confraternizacao")}>Confraternização</h3>
      </span>
      {/* <ButtonEstilizado /> */}
    </HeaderStyle>
  );
};

export default Header;
