import Product from "../Product"

function MenuContainer ({produtos,produtosFiltrados,handleClick}){
    return(
        <>
        {
        produtosFiltrados.length === 0 ?
        <Product elementos={produtos} handleClick={handleClick} />
        :
        <Product elementos={produtosFiltrados} handleClick={handleClick} />
        }
        </>
    )

}

export default MenuContainer