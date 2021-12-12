import axios from 'axios';

export const getAllProducts = () => {
  const request = axios.get('http://localhost:8000/product');

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'GET_PRODUCTS',
        payload: response.data.data,
      });
    });
  };
};

export const getAllCategories = () => {
  const request = axios.get('http://localhost:8000/product/category');

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'GET_CATEGORIES',
        payload: response.data.data,
      });
    });
  };
};
