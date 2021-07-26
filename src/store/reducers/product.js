import { ADD_TO_CART, GET_PRODUCTS, GET_CARTS } from "../constants";

const initialState = {
  carts: [],
  products: [],
  product: {
    id: 0,
    type: "",
    name: "",
    caption: "",
    image: "",
    priceDisc: 0,
    priceReal: 0,
    quantity: 0,
    description: "",
  },
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ADD_TO_CART:
      const carts = [];
      const findProduct = state.products.find((val) => val.id == payload);
      carts.push({ ...findProduct});
      return {
        ...state,
        carts: carts,
      };
    case GET_CARTS:
      return state;

    default:
      return state;
  }
};

export default productReducer;
