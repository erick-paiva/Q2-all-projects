import Student from "../Student"
import "./style.css"
const Card = ({arr}) => {

 
    return(
        <ul>
            <Student arrNumeros={arr}/>
        </ul>
    )
}

export default Card