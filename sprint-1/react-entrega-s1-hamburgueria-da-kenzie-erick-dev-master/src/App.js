import { useState } from 'react';
import './App.css';
import MenuContainer from './components/MenuContainer'
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'Fanta', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [produtoDigitado,setProdutoDigitado] = useState("")
  const [resultadoBusca,setResultadoBusca] = useState("")
  function showProducts (produto) {
    setFilteredProducts(products.filter((a) => (a.name.toLowerCase() === produto.toLowerCase()) || (a.category.toLowerCase() === produto.toLowerCase())))
    setResultadoBusca(produto)
  }

  function handleClick(productId,price) {
    if(!currentSale.some((a) => a.id === productId)){
      setCartTotal(cartTotal+price)
      const filteredProduct = products.find((a) => a.id === productId)
      setCurrentSale([...currentSale,filteredProduct])
    }
  }

  return (
    <div className="App-header">
      <header> 
        <h1 className="tituloHamburgueria">Burguer <span>Kenzie</span></h1>
        <div className="caixaPesquisa"> <input type="text" onChange={(event) => setProdutoDigitado(event.target.value)} placeholder="Digite para pesquisar"/>
        <button onClick={() => showProducts(produtoDigitado)}>pesquisar</button></div>
        
      </header>
      <main>
        {filteredProducts.length > 0 && <div className="resultadoBusca"> Resultados para: <span>{resultadoBusca}</span> </div> }
        <div className="areaCompras">
          <section className="carrosel"> 
            <MenuContainer produtos={products} handleClick={handleClick} produtosFiltrados={filteredProducts}/> 
    
          </section>
        
        <section className="secaoCarrinho">
            <h3>Carrinho de compras</h3>
            <div className="divCarrinho">
              {cartTotal === 0 ? 
                <div className="carrinhoVazio"> 
                  <h4>Sua sacola esta vazia</h4>
                  <h5>adcione itens</h5>
                </div>
              :
              <>
              <ul className="carrinho">
              {currentSale.map((ele,index) =>  
                <li className="carrinhoFilho" key={index}>
                  <div className="imgCarrinho">
                    <figure><img src={ele.img} alt={ele.name}></img></figure>
                    <div className="descricaoProdutoCarrinho">
                      <h4>{ele.name}</h4>
                      <span>{ele.category}</span>
                    </div>
                  </div>
                
              <a onClick={() => {setCartTotal(cartTotal-ele.price) ;setCurrentSale(currentSale.filter((a,i) => i !== index))}} className="removerProduto">Remover</a>
            </li>)}
            </ul>
            <div className="totalCompra"><span>Total</span> <span className="total">{`R$ ${cartTotal.toFixed(2)}`}</span></div>
            <a onClick={() => { setCartTotal(0) ;setCurrentSale([])}}  className="removerTodos"  >Remover Todos</a>
            </>
            }
          </div>  
        </section> 
        
        </div>
      </main>
      
       
    </div>
  );
}

export default App;
