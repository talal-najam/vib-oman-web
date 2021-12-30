export const addToCartOk = (type, item, quantity) => {
  return (dispatch) => {
    const payload = {
      item,
      quantity,
    };

    dispatch({
      type: `APPEND/${type}`,
      payload,
    });
  };
};
