import { getRecords } from "./index.js";
import { requestStart, requestOk, requestError } from "./requestMethods";

export const postAction = (type, host, body) => (dispatch) => {
  dispatch(requestStart());
  const url = `${host}/api/${type}`;
  return fetch(url, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => {
      dispatch(getRecords(type));
      return dispatch(requestOk());
    })
    .catch((err) => dispatch(requestError(err)));
};
