import { GET_PRODUCTS, ADD_TO_CARTS, GET_CARTS, FIND_ID } from "../constants";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
    payload: [
      {
        id: 1,
        image: "/assets/people.svg",
        productName: "Color Item Type / Satu",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 2,
        image: "/assets/people.svg",
        productName: "Color Item Type / Dua",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 3,
        image: "/assets/people.svg",
        productName: "Color Item Type / Tiga",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 4,
        image: "/assets/people.svg",
        productName: "Color Item Type / Empat",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 5,
        image: "/assets/people.svg",
        productName: "Color Item Type / Lima",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 6,
        image: "/assets/people.svg",
        productName: "Color Item Type / Enam",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 7,
        image: "/assets/people.svg",
        productName: "Color Item Type / Tujuh",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 8,
        image: "/assets/people.svg",
        productName: "Color Item Type / Delapan",
        price: 39.99,
        discount: 19.99,
        description:
          "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: ["small", "medium", "large"],
      },
      {
        id: 9,
        image: "/assets/people.svg",
        productName: "Color Item Type / Sembilan",
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
  return {
    type: GET_CARTS,
  };
};
