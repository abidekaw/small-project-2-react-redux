import "./CardHome.css";

const CardHome = ({ cardData }) => {
  return (
    <div className="card-parent">
      {cardData.map((val, key) => (
        <div className="card-home" key={key}>
          <p>{val.title}</p>
          <span>{val.subtitle}</span>
        </div>
      ))}
    </div>
  );
};

export default CardHome;
