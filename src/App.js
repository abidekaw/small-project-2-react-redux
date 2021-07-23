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
        <div>
        <Switch>
          <Route exact path="/">
            {Home}
          </Route>
          <Route path="/product">{Product}</Route>
          <Route path="/shop">{Shop}</Route>
          <Route path="/cart">{Cart}</Route>
          <Route>{NotFound}</Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
