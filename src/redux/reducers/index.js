import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    allCarts : cartReducer,
})
export default reducers;