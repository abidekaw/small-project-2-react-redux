import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Product from "./pages/product";
import Cart from "./pages/cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">{Home}</Route>
          <Route path="/product">{Product}</Route>
          <Route path="/shop">{Shop}</Route>
          <Route path="/cart">{Cart}</Route>
          <Route>{NotFound}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
