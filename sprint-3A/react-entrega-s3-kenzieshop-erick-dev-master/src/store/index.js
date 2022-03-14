import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import addCarrinho from "./modules/products/reducer";
import resultadoSoma from "./modules/total/reducer";

const reducers = combineReducers({ produto: addCarrinho, num: resultadoSoma });
const store = createStore(reducers, applyMiddleware(thunk));


export default store