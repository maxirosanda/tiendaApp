import { configureStore } from '@reduxjs/toolkit'
import  breadReducer from './features/breads/breadSlice'
import categoryReducer from './features/categorys/categorySlice'

export const store = configureStore({
  reducer: {
    breads: breadReducer,
    categories: categoryReducer
  },
})
