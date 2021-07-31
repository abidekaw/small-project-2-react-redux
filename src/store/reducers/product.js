import {
  ADD_TO_CARTS,
  GET_PRODUCTS,
  GET_CARTS,
  DELETE_CART_BY_ID,
} from "../constants";

const initialState = {
  carts: [],
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ADD_TO_CARTS:
      const carts = state.carts;
      const findProduct = state.products.find((val) => val.id === payload);
      carts.push({ ...findProduct, qty: 1 });
      return {
        ...state,
        carts: carts,
      };
    case GET_CARTS:
      return state;
    case DELETE_CART_BY_ID:
      const deleteProduct = [...state.carts];
      if (deleteProduct[payload] !== -1) {
        deleteProduct.splice(payload, 1);
      }
      return {
        ...state,
        carts: deleteProduct,
      };

    default:
      return state;
  }
};

export default productReducer;
