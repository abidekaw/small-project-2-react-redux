import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <h2>Your Shop Name</h2>
      <form>
        <input id="search" type="search" placeholder="PRODUCT" />
        <label htmlFor="search">
          <img src="/assets/search.svg" alt="search" />
        </label>
      </form>
      <img
        src="/assets/shopping-cart.svg"
        alt="shopingcart"
        width="40px"
        height="40px"
      />
    </div>
  );
};

export default Header;
