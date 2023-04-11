import axios from 'axios';

export const getAllOrders = () => {
  const request = axios.get(
    `${process.env.REACT_APP_SERVER_HOST}/order/all-orders`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('AdminToken')}`,
      },
    }
  );

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'GET_ALL_ORDERS',
        payload: response.data.data,
      });
    });
  };
};
