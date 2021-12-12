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
      const products = [];
      for (let i = 0; i < payload.length; i++) {
        const product = payload[i];
        product.stateId = i + 1;
        products.push(product);
      }

      return {
        ...state,
        productsShowed: payload,
        shops: payload,
        products,
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
      const product = state.products.find((item) => {
        return item.id === payload;
      });

      return {
        ...state,
        product,
      };

    case 'EMPTY_PRODUCT':
      return {
        ...state,
        product: [],
      };

    default:
      return state;
  }
};

export default productsReducer;
