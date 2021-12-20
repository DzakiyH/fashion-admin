const initialState = {
  orders: [],
  orderProducts: [],
};

const ordersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_ALL_ORDERS':
      return {
        ...state,
        orders: payload[0],
        orderProducts: payload[1],
      };

    default:
      return state;
  }
};

export default ordersReducer;
