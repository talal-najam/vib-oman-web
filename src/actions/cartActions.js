export const addToCartAction = (type, product, label, quantity) => {
  return (dispatch) => {
    const payload = {
      id: product.id,
      name: label,
      price: product.unit_price,
      image: product.small_image,
      quantity,
    };

    dispatch({
      type: `APPEND/${type}`,
      payload,
    });
  };
};

export const addOneQuantityAction = (type, id) => {
  return (dispatch) => {
    const payload = {
      id,
    };

    dispatch({
      type: `ADD_ONE_QUANTITY/${type}`,
      payload,
    });
  };
};

export const removeOneQuantityAction = (type, id) => {
  return (dispatch) => {
    const payload = {
      id,
    };

    dispatch({
      type: `REMOVE_ONE_QUANTITY/${type}`,
      payload,
    });
  };
};

export const removeAllFromCartAction = (type, id) => {
  return (dispatch) => {
    const payload = {
      id,
    };

    dispatch({
      type: `REMOVE_ALL_FROM_CART/${type}`,
      payload,
    });
  };
};
