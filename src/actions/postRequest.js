import { getRecords } from './index.js'

const START = "request/START";
const ERROR = "request/ERROR";
const OK = "request/OK";
const PROGRESS = "request/PROGRESS";

export const requestActions = {
  START,
  ERROR,
  OK,
  PROGRESS,
};

const requestStart = () => ({
  type: START,
});

const requestError = (error) => ({
  type: ERROR,
  error,
});

const requestOk = () => ({
  type: OK,
});

export const postAction = (type, host, body) => (dispatch) => {
  console.log("JSON body", JSON.stringify(body));
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
      console.log("Response from post request", json.data);
      dispatch(getRecords(type));
      return dispatch(requestOk());
    })
    .catch((err) => dispatch(requestError(err)));
};
