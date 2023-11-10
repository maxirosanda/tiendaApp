import { createSlice } from "@reduxjs/toolkit"
import CATEGORIES from "../../../data/category"

export const categorySlice = createSlice({
    name:"categories",
    initialState: CATEGORIES,
    reducers:{}

})

export default categorySlice.reducer