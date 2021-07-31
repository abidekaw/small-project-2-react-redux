import { GET_PRODUCTS, ADD_TO_CARTS, GET_CARTS, DELETE_CART_BY_ID } from "../constants";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
    payload: [
      {
        id: 1,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Satu",
        price: 39.99,
        discount: 19.99
      },
      {
        id: 2,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Dua",
        price: 39.99,
        discount: 19.99
      },
      {
        id: 3,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Tiga",
        price: 39.99,
        discount: 19.99
      },
      {
        id: 4,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Empat",
        price: 39.99,
        discount: 19.99
      },
      {
        id: 5,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Lima",
        price: 39.99,
        discount: 19.99
      },
      {
        id: 6,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Enam",
        price: 39.99,
        discount: 19.99
      },
      {
        id: 7,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Tujuh",
        price: 39.99,
        discount: 19.99
      },
      {
        id: 8,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Delapan",
        price: 39.99,
        discount: 19.99
      },
      {
        id: 9,
        image: "https://i.postimg.cc/qqmLF0TR/people.png",
        productName: "Color Item Type / Sembilan",
        price: 39.99,
        discount: 19.99
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
    payload: id
  }
}
