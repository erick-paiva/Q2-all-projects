import "./styles.css"
function Lista ({fruits , classe}){

    return (
        <ul className={classe}>{fruits.map((fruit)=> (<li key={fruit.name}>{fruit.name}</li> ))}</ul>
    )
}

export default Lista