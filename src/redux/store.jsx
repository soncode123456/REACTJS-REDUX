import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './reducers/cryptoReducer';
// Nếu có nhiều reducer, sử dụng combineReducers
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  crypto: cryptoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
