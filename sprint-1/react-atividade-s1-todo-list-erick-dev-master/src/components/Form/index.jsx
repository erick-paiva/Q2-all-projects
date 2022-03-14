import { useState } from "react"
import "./style.css"
const Form = ({addTodo}) => {
    const [digitado,setDigitado] = useState("")
    return(
        <form>
            <input type="text" onChange={(e) => setDigitado(e.target.value)} placeholder="Nova tarefa"/>
            <button onClick={(e) => {e.preventDefault(); return addTodo(digitado)}}>Adcionar</button>
        </form>
    )
}

export default Form