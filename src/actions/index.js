// import querystring from "querystring";
import action from "./action";
import { postAction } from "./postRequest";

export const getProducts = () =>
  action("products", process.env.REACT_APP_API_HOST, "api/products");
export const getBrands = () =>
  action("brands", process.env.REACT_APP_API_HOST, "api/brands");
export const getCategories = () =>
  action("categories", process.env.REACT_APP_API_HOST, "api/categories");

export const getRecords = (type) =>
  action(type, process.env.REACT_APP_API_HOST, `api/${type}`);

export const addRecord = (type, body) =>
  postAction(type, process.env.REACT_APP_API_HOST, body);
