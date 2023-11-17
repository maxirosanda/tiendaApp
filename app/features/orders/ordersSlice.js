import { createSlice } from "@reduxjs/toolkit"
import { addOrder,fetchOrders } from "./ordersApi"

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders:[],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;

      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.orders = action.payload
      })
  }
})

export default ordersSlice.reducer