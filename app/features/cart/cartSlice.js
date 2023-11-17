import { createSlice } from "@reduxjs/toolkit"
import { fetchCart,removeProductFromCart ,addProductToCart } from "./cartApi"

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {},
    total: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
        if(state.cart.products){
          state.total = state.cart.products.reduce((acc, item) => acc + item.price, 0);
        }
       

      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.cart = action.payload;
        state.total = state.cart.products.reduce((acc, item) => acc + item.price, 0);
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
        state.total = state.cart.products.reduce((acc, item) => acc + item.price, 0);
      });
  }
})

export default cartSlice.reducer