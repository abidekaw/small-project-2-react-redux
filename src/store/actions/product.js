import { GET_PRODUCTS, ADD_TO_CARTS, GET_CARTS } from "../constants";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
    payload: [
      {
        id: 1,
        productName: "Color Item Type / Name",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 2,
        productName: "Color Item Type / Name",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 3,
        productName: "Color Item Type / Name",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 4,
        productName: "Color Item Type / Name",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 5,
        productName: "Color Item Type / Name",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 6,
        productName: "Color Item Type / Name",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 7,
        productName: "Color Item Type / Name",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 8,
        productName: "Color Item Type / Name",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 9,
        productName: "Color Item Type / Name",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
    ],
  };
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CARTS,
    payload: id,
  };
};

export const getCarts = () => {
  return{
      type: GET_CARTS,
  }
}
