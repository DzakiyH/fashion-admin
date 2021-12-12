import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import productsReducer from './products/reducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({ productsReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
