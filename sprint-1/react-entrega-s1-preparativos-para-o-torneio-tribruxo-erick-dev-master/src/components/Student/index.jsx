import desconhecido from "../../img/desconhecido.png"
import "./style.css"
const Student = ({arrNumeros}) => {
    
    return(
        <>
            {arrNumeros.map((e) => <li key={e.name}>
                <figure ><img className={e.house} src={e.image === "" ? desconhecido : e.image} alt={e.name}></img></figure>
                <h2> {e.name} </h2>
                <h3 >{e.actor}</h3>
                <p>esta vivo: {e.wizard ? "sim":"não"}</p>
                <p>Casa: {e.house}</p>
            </li>)}
        </>
    )
}

export default Student