// import querystring from "querystring";
import action from "./action";
import postAction from "./postAction";
// import { langs } from "../lang";
// import transformProducts from './transformProducts'

const REACT_APP_API_HOST = "http://localhost:5000";

// export const getProducts = () =>
//   action("products", process.env.REACT_APP_API_HOST, "api/products");
export const getProducts = () =>
  action("products", REACT_APP_API_HOST, "api/products");
export const getBrands = () =>
  action("brands", REACT_APP_API_HOST, "api/brands");
export const getCategories = () =>
  action("categories", REACT_APP_API_HOST, "api/categories");

export const addProduct = () =>
  postAction("products", REACT_APP_API_HOST, "api/products");

export const addCategory = () =>
  postAction("products", REACT_APP_API_HOST, "api/products");

export const addBrand = () =>
  postAction("products", REACT_APP_API_HOST, "api/products");

// export const getStrings = () => async (dispatch) => {
//   const getLang = lang => langs.find(item => item.value === lang);
//   const savedLang = window.localStorage && window.localStorage.getItem('localization');
//   const userLang = window.navigator.language;
//   const defaultLang = langs[0];
//   const lang = getLang(savedLang) || getLang(userLang) || defaultLang;

//   const defData = await import(/* webpackChunkName: 'i18n-[request]' */`../lang/${defaultLang.value}.json`);
//   const selData = await import(/* webpackChunkName: 'i18n-[request]' */`../lang/${lang.value}.json`);

//   dispatch({ type: 'strings', payload: { ...defData, ...selData } });
// };
