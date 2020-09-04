const setCatFood = (list) => {
  return {
    type: 'SET_CAT_FOOD',
    payload: list,
  };
};

const listProductsError = () => {
  return {
    type: 'LIST_PRODUCTS_ERROR',
  };
};

const addedToCart = (id) => {
  return {
    type: 'SELECT_PRODUCT',
    payload: id,
  };
};

export { setCatFood, addedToCart, listProductsError };
