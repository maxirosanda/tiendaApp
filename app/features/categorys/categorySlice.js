import { createSlice } from "@reduxjs/toolkit"
import CATEGORIES from "../../../data/category"

export const categorySlice = createSlice({
    name:"categories",
    initialState: {
        categories: CATEGORIES,
        selected: null,
      },
    reducers:{
        setSelectedCategory: (state, action) => {
            const { id } = action.payload
            state.selected = state.categories.find((item) => item.id === id) || null
          }
    }

})
export const { setSelectedCategory} = categorySlice.actions
export default categorySlice.reducer