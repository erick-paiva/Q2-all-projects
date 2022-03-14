import { useSelector } from "react-redux"
import "./styles.css"
const Digimons = () => {
    const {digimons} = useSelector(state => state)
    return(
        <div className="containerImg">
            <ul>
                {digimons.map((e,i) => <li key={i}> 
                <figure>
                    <h3>{e.name}</h3>
                    <img src={e.img} alt={e.name} />
                    <figcaption>level: {e.level}</figcaption>
                </figure>
                    
                </li>)}
                
            </ul>
        </div>
    )
}
export default Digimons