import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const isAuth = window.localStorage.getItem("dataLogin") && JSON.parse(window.localStorage.getItem("dataLogin"));
  return isAuth ? <Route {...props} /> : <Redirect to="/auth" />;
};

export default PrivateRoute;
