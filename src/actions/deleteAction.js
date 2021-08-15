import { getRecords } from "./index.js";

import { requestStart, requestOk, requestError } from "./requestMethods";

export const deleteAction = (type, host, ids) => (dispatch) => {
  dispatch(requestStart());
  const url = `${host}/api/${type}/deleteMany`;
  const body = { ids };

  return fetch(url, {
    method: "delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(async (json) => {
      await dispatch(getRecords(type));
      return dispatch(requestOk());
    })
    .catch((err) => dispatch(requestError(err)));
};
