import "./App.css";
import ProductList from "./components/Product-list";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";
function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <ProductList type="catalogue" />
          <ProductList type="cart"/>
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
