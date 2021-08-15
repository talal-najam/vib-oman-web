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
