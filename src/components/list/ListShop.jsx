import React from "react";
import { Link } from "react-router-dom";

const ListShop = (props) => {
  return (
    <aside className={props.className}>
      <h6>{props.title}</h6>
      {props.listData.map((val, key) => {
        return (
          <Link key={key} to={val.to}>
            {val.listName}
          </Link>
        );
      })}
    </aside>
  );
};

export default ListShop;
