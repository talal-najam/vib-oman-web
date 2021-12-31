export const addToCartOk = (type, itemName, price, quantity) => {
  return (dispatch) => {
    const payload = {
      itemName,
      price,
      quantity,
    };

    dispatch({
      type: `APPEND/${type}`,
      payload,
    });
  };
};
