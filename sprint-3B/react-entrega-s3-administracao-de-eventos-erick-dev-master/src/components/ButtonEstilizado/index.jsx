import { Container } from "./styles"
import "./styles"
const ButtonEstilizado = ({text, callBack, index}) => {
    return(
        <Container>
            <div className="buttonEstilizado" onClick={() => callBack(index)}>{text}</div>
        </Container>
    )
}
export default ButtonEstilizado