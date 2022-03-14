import { ADD_PRODUCT } from "./actionsTypes";

const addCarrinho = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return action.produto;
    default:
      return state
  }
};

export default addCarrinho