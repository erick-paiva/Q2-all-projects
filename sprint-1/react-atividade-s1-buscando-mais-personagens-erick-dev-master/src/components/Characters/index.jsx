import CharCard from "../CharCard"
import "./styles.css"
const Characters = ({personagens}) =>{

    return(
        <>
            <h1>Meus personagens</h1>
            <CharCard personagens={personagens} />
        </>
    )
}

export default Characters