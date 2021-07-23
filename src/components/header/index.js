import shoppingcart from "./shopping-cart.svg";
import search from "./search.svg";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <h2>Your Shop Name</h2>
      <form>
        <input id="search" type="search" placeholder="PRODUCT" />
        <label htmlFor="search">
          <img src={search} alt="search" />
        </label>
      </form>
      <img src={shoppingcart} alt="shopingcart" width="40px" height="40px" />
    </div>
  );
};

export default Header;
