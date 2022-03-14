import "./styles.css"
function PersonCard ({name}){
    return (
        <div className="card">
            <p>Ola, {name}</p>
        </div>
    )
}

export default PersonCard;