// import querystring from "querystring";
import action from "./action";
import { postAction } from "./postRequest";
import { deleteAction } from "./deleteAction";
import { addToCartOk } from "./cartActions";

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
export const addToCart = (type, itemName, price, quantity) => addToCartOk(type, itemName, price, quantity);
