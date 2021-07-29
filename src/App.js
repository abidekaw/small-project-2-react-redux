import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Shoppage from "./pages/shop/Shoppage";
import Productpage from "./pages/product/Productpage";
import Cartpage from "./pages/cart/Cartpage";
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
