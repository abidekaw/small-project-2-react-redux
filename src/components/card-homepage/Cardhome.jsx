import "./CardHome.css";

const CardHome = (props) => (
  <div className="cardhome">
    <p>{props.title}</p>
    <span>{props.subtitle}</span>
  </div>
);

export default CardHome;
