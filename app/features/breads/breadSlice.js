import { createSlice } from "@reduxjs/toolkit"
import BREADS from "../../../data/breads"

export const breadSlice = createSlice({
    name:"breads",
    initialState: BREADS,
    reducers:{}

})

export default breadSlice.reducer