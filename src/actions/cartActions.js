export const addToCartOk = (type, product, label, quantity) => {
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
