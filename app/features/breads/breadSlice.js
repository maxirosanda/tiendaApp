import { createSlice } from "@reduxjs/toolkit"
import BREADS from "../../../data/breads"

export const breadSlice = createSlice({
  name: "breads",
  initialState: {
    breads: BREADS,
    filteredBread: [],
    selected: null,
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
});

export const { setFilteredBread, setSelectedBread } = breadSlice.actions
export default breadSlice.reducer