import { Link } from "react-router-dom"
import "./style.css"

export const Home = ({user}) =>{

    return(
        <div className="container">
            <h3>Bem vindo! {user.username}</h3>
            <Link to="/">Voltar ao login</Link>
        </div>
    )
}