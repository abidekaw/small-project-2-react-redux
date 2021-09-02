import React from "react";
import Layout from "../../../layouts/Layout";
import CardShop from "../../../components/card/CardShop";
import ListShop from "../../../components/list/ListShop";
import "./Shop.css";

const Shop = () => {
  const listDataCategory = [
    { to: "#", listName: "CATEGORY 1" },
    { to: "#", listName: "CATEGORY 2" },
    { to: "#", listName: "CATEGORY 3" },
    { to: "#", listName: "CATEGORY 4" },
    { to: "#", listName: "CATEGORY 5" },
  ];

  const listDataFilter = [
    { to: "#", listName: "FILTER 1" },
    { to: "#", listName: "FILTER 2" },
    { to: "#", listName: "FILTER 3" },
    { to: "#", listName: "FILTER 4" },
    { to: "#", listName: "FILTER 5" },
  ];

  const listDataPagination = [
    { to: "#", listName: "1" },
    { to: "#", listName: "2" },
    { to: "#", listName: "3" },
    { to: "#", listName: "4" },
    { to: "#", listName: "5" },
    { to: "#", listName: "6" },
    { to: "#", listName: "7" },
    { to: "#", listName: "8" },
    { to: "#", listName: "9" },
  ];

  return (
    <Layout>
      <div className="main-shop">
        <div className="aside-shop">
          <ListShop className="featured" title="FEATURED" listData={listDataCategory} />
        </div>

        {/* <CardShop /> */}

        <div className="aside-shop">
          <ListShop className="filter" title="ALL" listData={listDataFilter} />
        </div>
      </div>

      <ListShop className="pagination" listData={listDataPagination} />
    </Layout>
  );
};

export default Shop;
