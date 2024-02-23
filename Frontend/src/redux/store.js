// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;
