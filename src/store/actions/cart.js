import { GET_PRODUCTS, GET_TODO_BY_ID, DELETE_TODO } from "../constants";

export const getProduct = () => {
  return {
    type: GET_PRODUCTS,
    payload: [
      {
        id: 1,
        name: "Belajar Fullstack",
        description: "Belajar Fullstack untuk tujuan",
      },
      {
        id: 2,
        name: "Belajar Fullstack 2",
        description: "Belajar Fullstack untuk tujuan 2",
      },
      {
        id: 3,
        name: "Belajar Fullstack 3",
        description: "Belajar Fullstack untuk tujuan 3",
      },
      {
        id: 4,
        name: "Belajar Fullstack 4",
        description: "Belajar Fullstack untuk tujuan 4",
      },
    ],
  };
};

export const getTodoById = (id) => {
  return {
    type: GET_TODO_BY_ID,
    payload: id,
  };
};

// export const addTodo = (payload) => {
//     return{
//         type: ADD_TODO,
//         payload,
//     }
// };

// export const updateTodo = (payload) => {
//     return{
//         type: UPDATE_TODO,
//         payload,
//     }
// };

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export default { getTodo, getTodoById, deleteTodo };
