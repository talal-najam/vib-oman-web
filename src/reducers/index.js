import { combineReducers } from "redux";
import reducer from "./reducer";
import request from "./request";
import form from "./form";

export default combineReducers({
  categories: reducer("categories"),
  brands: reducer("brands"),
  products: reducer("products"),
  product: reducer("product"),
  cart: reducer('cart'),
  // strings: (state = {}, action) => ((action && action.type === 'strings') ? action.payload : state),
  form,
  request,
});
