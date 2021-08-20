const START = "request/START";
const ERROR = "request/ERROR";
const OK = "request/OK";

export const requestStart = () => ({
  type: START,
});

export const requestError = (error) => ({
  type: ERROR,
  error,
});

export const requestOk = () => ({
  type: OK,
});

export const deleteOk = (type, ids) => ({
  type: `DELETE/${type.toLowerCase()}`,
  payload: { type, ids },
});
