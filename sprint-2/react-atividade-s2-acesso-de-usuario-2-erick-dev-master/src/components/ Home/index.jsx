import { Link } from "react-router-dom"
import "./style.css"
const Home = ({members}) => {


    return(
        <div className="pricipal">
            <h2> Membros </h2>
        {
            members.map((e) => <Link to={e.type === "pj" ? `/company/${e.id}` : `/customer/${e.id}` }>{e.name}</Link> )
        }
        </div>
    )
}

export default Home