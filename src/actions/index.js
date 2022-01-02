// import querystring from "querystring";
import action from "./action";
import { postAction } from "./postRequest";
import { deleteAction } from "./deleteAction";
import {
  addToCartAction,
  addOneQuantityAction,
  removeOneQuantityAction,
  removeAllFromCartAction
} from "./cartActions";

export const getProducts = (params) =>
  action("products", process.env.REACT_APP_API_HOST, "api/products", params);
export const getProduct = (id, params) =>
  action("product", process.env.REACT_APP_API_HOST, `api/products/${id}`);
export const getBrands = () =>
  action("brands", process.env.REACT_APP_API_HOST, "api/brands");
export const getCategories = () =>
  action("categories", process.env.REACT_APP_API_HOST, "api/categories");

export const getRecords = (type) =>
  action(type, process.env.REACT_APP_API_HOST, `api/${type}`);

export const addRecord = (type, body) =>
  postAction(type, process.env.REACT_APP_API_HOST, body);

export const deleteRecords = (type, ids) =>
  deleteAction(type, process.env.REACT_APP_API_HOST, ids);

// TODO: Don't like this duplicate tbh. Cleanup required here
export const addToCart = (type, item, label, quantity) =>
  addToCartAction(type, item, label, quantity);

export const addOneItem = (type, id) => addOneQuantityAction(type, id);

export const removeOneItem = (type, id) => removeOneQuantityAction(type, id);

export const removeFromCart = (type, id) => removeAllFromCartAction(type, id);
