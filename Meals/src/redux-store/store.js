
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import mealsReducer from './reducer';

// Create the Redux store with mealsReducer and logger middleware
const store = createStore(mealsReducer, applyMiddleware(logger));

export default store;
