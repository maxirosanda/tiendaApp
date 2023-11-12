import { createSlice } from "@reduxjs/toolkit"
import { fetchBreads } from "./breadApi"


export const breadSlice = createSlice({
  name: "breads",
  initialState: {
    breads: [],
    filteredBread: [],
    selected: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setFilteredBread: (state, action) => {
      const { filterType } = action.payload
      state.filteredBread = state.breads.filter((bread) => bread.categoryId === filterType)
      state.selected = null
    },
    setSelectedBread: (state, action) => {
      const { id } = action.payload
      state.selected = state.breads.find((item) => item.id === id) || null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreads.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBreads.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.breads = action.payload;
      })
      .addCase(fetchBreads.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
})

export const { setFilteredBread, setSelectedBread } = breadSlice.actions
export default breadSlice.reducer