import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductContextProvider from "./Global/ProductsContext";
import CartContextProvider from "./Global/CartContext";
import Products from "./components/Products";
import Copyright from "./components/Copyright";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="wrapper">
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/cart" component={Cart} />
              <Route component={NotFound} />
            </Switch>

            <Copyright />
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
