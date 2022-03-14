import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./providers/cart";
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
