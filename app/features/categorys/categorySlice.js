import { createSlice} from "@reduxjs/toolkit"
import { fetchCategories } from "./categoryApi"

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    selected: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      const { id } = action.payload;
      state.selected = state.categories.find((item) => item.id === id) || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;