import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Nomatch from "./pages/Nomatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route component={Nomatch} />
      </Switch>
    </Router>
  );
}

export default App;
