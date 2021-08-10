import {
  GET_PRODUCTS,
  ADD_TO_CARTS,
  GET_CARTS,
  DELETE_CART_BY_ID,
} from "../constants";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
    payload: [
      {
        id: 1,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Satu",
        price: 39.99,
        discount: 19.99,
        caption: "Kacamata tampan dan Berani",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["Small", "Medium", "Large"],
      },
      {
        id: 2,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Dua",
        price: 39.99,
        discount: 19.99,
        caption: "Kacamata tampan dan Berani",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["Small", "Medium", "Large"],
      },
      {
        id: 3,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Tiga",
        price: 39.99,
        discount: 19.99,
        caption: "Kacamata tampan dan Berani",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["Small", "Medium", "Large"],
      },
      {
        id: 4,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Empat",
        price: 39.99,
        discount: 19.99,
        caption: "Kacamata tampan dan Berani",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["Small", "Medium", "Large"],
      },
      {
        id: 5,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Lima",
        price: 39.99,
        discount: 19.99,
        caption: "Kacamata tampan dan Berani",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["Small", "Medium", "Large"],
      },
      {
        id: 6,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Enam",
        price: 39.99,
        discount: 19.99,
        caption: "Kacamata tampan dan Berani",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["Small", "Medium", "Large"],
      },
      {
        id: 7,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Tujuh",
        price: 39.99,
        discount: 19.99,
        caption: "Kacamata tampan dan Berani",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["Small", "Medium", "Large"],
      },
      {
        id: 8,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Delapan",
        price: 39.99,
        discount: 19.99,
        caption: "Kacamata tampan dan Berani",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["Small", "Medium", "Large"],
      },
      {
        id: 9,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Sembilan",
        price: 39.99,
        discount: 19.99,
        caption: "Kacamata tampan dan Berani",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["Small", "Medium", "Large"],
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
  return {
    type: GET_CARTS,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_CART_BY_ID,
    payload: id,
  };
};
