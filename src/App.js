import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/home";
import Shoppage from "./pages/shop";
import Productpage from "./pages/product";
import Cartpage from "./pages/cart";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/product" component={Productpage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/cart" component={Cartpage} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
