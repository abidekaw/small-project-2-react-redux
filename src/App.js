import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/users/home/Home";
import Shop from "./pages/users/shop/Shop";
import Product from "./pages/users/product/Product";
import Cart from "./pages/users/cart/Cart";
import Auth from "./pages/auth/Auth";
import AdminHome from './pages/admin/home/AdminHome';
import AdminProduct from './pages/admin/product/AdminProduct';
import NotFound from "./pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/shop" component={Shop} />
        <PrivateRoute path="/cart" component={Cart} />
        <Route path="/auth" component={Auth} />
        <PrivateRoute exact path="/admin" component={AdminHome} />
        <PrivateRoute exact path="/admin/product" component={AdminProduct} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
