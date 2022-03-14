import { useState } from "react"
import "./style.css"
const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
    const [textoAviso,setTextoAviso] = useState("Entre com o seu usuario para logar.")
    const [userInput,setUserInput] = useState("")
    const HandleLogin = (userInput,e) => {
        if(userInput !== ""){
            setUser(userInput)
            setIsLoggedIn(true)  
        }else{
            e.preventDefault();
            setTextoAviso("Você precisa adcionar um usuario para Entrar!")
        }
        console.log(e)
    }
    console.log(userInput)
    return (
        <form>
            <h2>{textoAviso}</h2>
            <input type="text" value={userInput} onChange={(event) => setUserInput(event.target.value)} placeholder="digite seu User"/>
            <button onClick={(e) => HandleLogin(userInput,e)}>Acessar com o nome</button>
        </form>
    )
}

export default GetUserComponent