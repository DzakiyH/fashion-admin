const initialState = {
  shops: [],
  categories: [],
  products: [],
  product: {},
  productsShowed: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        productsShowed: payload,
        shops: payload,
        products: payload,
      };

    case 'SEARCH_PRODUCTS':
      if (payload === '') {
        return {
          ...state,
          productsShowed: state.shops,
        };
      } else {
        const productSearched = state.shops.filter((product) => {
          return product.title.includes(payload);
        });

        return {
          ...state,
          productsShowed: productSearched,
        };
      }

    case 'ADD_PRODUCT':
      const product = state.products.filter((item) => {
        return item.id === payload;
      });

      return {
        ...state,
        product,
      };

    case 'DELETE_PRODUCT':
      const newProducts = state.products.filter((product) => {
        return product.id !== payload;
      });

      return {
        ...state,
        products: newProducts,
        shops: newProducts,
        productsShowed: newProducts,
      };

    default:
      return state;
  }
};

export default productsReducer;
