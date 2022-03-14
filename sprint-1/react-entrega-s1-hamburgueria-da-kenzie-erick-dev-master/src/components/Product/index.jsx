import "./style.css"

function Product ({elementos,handleClick}){

    return (
        <>
            <ul>
                {elementos.map((ele) => <li key={ele.id}>
                <figure className="imgLanches">
                    <img src={ele.img} alt={ele.img}/>
                </figure>
                <div className="detalhes">
                    <h4>{ele.name}</h4>
                    <p className="categoria">{ele.category}</p>
                    <p className="preco">{`R$ ${ele.price.toFixed(2)}`}</p>
                    <button onClick={() => handleClick(ele.id,ele.price)} >Adcionar</button>
                </div>
                </li>)}
            </ul>
        </>
    )
}

export default Product