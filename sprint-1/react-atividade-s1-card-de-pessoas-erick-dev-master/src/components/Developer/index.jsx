import "./style.css"
function Developer ({name,age,country,className}){
    return(
        <div className={className}>
            <h2>Dev: {name}</h2>
            <h2>Idade: {age}</h2>
            <h2>País: {country}</h2>
        </div>
    )
}

export default Developer;