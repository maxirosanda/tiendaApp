import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
      try {
        const response = await fetch("https://tiendaapp-a2628-default-rtdb.firebaseio.com/categories.json");
        if (!response.ok) {
          throw new Error("Error al obtener datos de categorías");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
  )