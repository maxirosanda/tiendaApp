import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import breadReducer from './features/breads/breadSlice';
import categoryReducer from './features/categorys/categorySlice';
import cartReducer from './features/cart/cartSlice';
import authReducer, { authApi } from "./features/Auth/authSlice" // Ajusta la ruta según tu estructura

export const store = configureStore({
  reducer: {
    breads: breadReducer,
    categories: categoryReducer,
    cart:cartReducer,
    auth: authReducer, 
    [authApi.reducerPath]: authApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware, thunk),
});
