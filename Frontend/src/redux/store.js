<<<<<<< HEAD
// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

// undo up to here
=======
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/carts/cartSlice';
import { productApi } from '../features/animalsApi';

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    carts: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
>>>>>>> development
