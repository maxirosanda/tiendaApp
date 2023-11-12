import {createAsyncThunk } from "@reduxjs/toolkit"

export const fetchBreads = createAsyncThunk("breads/fetchBreads", async () => {
    try {
      const response = await fetch("https://tiendaapp-a2628-default-rtdb.firebaseio.com/breads.json");
      if (!response.ok) {
        throw new Error(`Error al obtener datos de panes: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la solicitud fetchBreads:", error);
      throw error;
    }
  });
  