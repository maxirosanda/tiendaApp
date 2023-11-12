import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import breadReducer from './features/breads/breadSlice';
import categoryReducer from './features/categorys/categorySlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    breads: breadReducer,
    categories: categoryReducer,
    cart:cartReducer
  },
  middleware: [thunk,logger]
});
