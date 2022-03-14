
import "./styles.css"
const CharCard = ({personagens}) =>{
    return(
        <ul>
            {personagens.map(person => <li className={person.status} key={person.id}> 
                <h2>{person.name}</h2>
                <figure><img src={person.image} alt={person.name}></img></figure>  
            </li>)}
        </ul>
    )
}

export default CharCard