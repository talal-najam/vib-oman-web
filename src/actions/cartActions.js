export const addToCartOk = (type, items) => {
  return (dispatch) => {
    dispatch({
      type: `APPEND/${type}`,
      payload: items,
    }); 
  };
};
