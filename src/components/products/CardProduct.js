import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProduct = (props) => {
  return (
    <Card className="my-2 p-2 rounded">
      <Link to={`/product/${props.product.id}`}>
        <Card.Img src={props.product.image}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${props.product.id}`} style={{ color: "black", textDecoration: "none" }}>
          <Card.Title as="div">
            <strong style={{ fontSize: "30px" }}>
              {props.product.productName}
            </strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as="div">
        <div className="h3">${props.product.discount}</div>
        <div className="h5" style={{ textDecoration: "line-through" }}>
          ${props.product.price}
        </div>
      </Card.Text>
    </Card>
  );
};

export default CardProduct;
