import { ADD_DIGIMONS } from "./actionTypes";

const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
		return [...state,...action.digimon]
    default:
      return state;
  }
};

export default digimonsReducer;