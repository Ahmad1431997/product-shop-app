import {createStore , compose,applyMiddleware, } from "redux"

import thunk from "redux-thunk";
// import { checkForToken } from "../action/authActions";
import { fetchProducts } from "../action/productActions";
import { fetchShops } from "../action/shopActions";
import rootReducer from "./rootReducer";


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
store.dispatch(fetchProducts())
store.dispatch(fetchShops())
// store.dispatch(checkForToken())
export default store;