const initialState = {
  listCatFood: [],
  selectedProduct: [],
  loading: true,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CAT_FOOD':
      return {
        ...state,
        listCatFood: action.payload,
        loading: false,
        error: false,
      };

    case 'LIST_PRODUCTS_ERROR':
      return {
        ...state,
        error: true,
        loading: false,
      };

    case 'SELECT_PRODUCT':
      const id = action.payload;

      const itemInd = state.selectedProduct.findIndex(
        (item) => item._id === id
      );

      if (itemInd >= 0) {
        return {
          ...state,
          selectedProduct: [
            ...state.selectedProduct.slice(0, itemInd),
            ...state.selectedProduct.slice(itemInd + 1),
          ],
        };
      }

      // Новый товар в корзине
      const item = state.listCatFood.find((item) => item._id === id);

      const newItem = {
        title: item.title,
        _id: item._id,
        volume: item.volume,
      };

      return {
        ...state,
        selectedProduct: [...state.selectedProduct, newItem],
      };

    default:
      return state;
  }
};

export default reducer;
