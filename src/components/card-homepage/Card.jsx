import "./Card.css";

const Card = () => {
  const listcard = [
    { title: "GALLERY", subtitle: "SUBTITLE" },
    { title: "ACTIVITIES", subtitle: "SUBTITLE" },
    { title: "KEYNOTES", subtitle: "SUBTITLE" },
  ];

  return (
    <div className="card-parent">
      {listcard.map((val, key) => (
        <div className="cardhome" key={key}>
          <p>{val.title}</p>
          <span>{val.subtitle}</span>
        </div>
      ))}
    </div>
  );
};

export default Card;
