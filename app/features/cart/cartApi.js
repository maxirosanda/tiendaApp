import {createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCart = createAsyncThunk("carts/fetchCart", async (userId) => {
    try {
      const response = await fetch(`https://tiendaapp-a2628-default-rtdb.firebaseio.com/carts.json`);
      if (!response.ok) {
        throw new Error(`Error al obtener datos del carrito: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json()
      const cart = data.find(item => item.userId = userId)
      return cart
    } catch (error) {
      console.error("Error en la solicitud fetchCart:", error)
      throw error
    }
  });
  
// Acción asíncrona para eliminar un producto del carrito
export const removeProductFromCart = createAsyncThunk(
  "carts/removeProduct",
  async ({ userId, productId }) => {
    try {
      // Realiza una solicitud para obtener el carrito actual del usuario
      const response = await fetch(`https://tiendaapp-a2628-default-rtdb.firebaseio.com/carts.json`);
      if (!response.ok) {
        throw new Error(`Error al obtener datos del carrito: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      
      // Encuentra el carrito del usuario por su ID
      const cart = data.find(item => item.userId === userId);
      const index = data.findIndex(item => item.userId === userId)
      if (cart) {
        // Filtra los productos para mantener solo aquellos que no coincidan con el ID a eliminar
        cart.products = cart.products.filter(product => product.id !== productId);
        console.log(`%cCart ID: ${index}`, 'background-color: yellow; color: black; font-weight: bold');
        console.log(`%cproduct ID: ${productId}`, 'background-color: yellow; color: black; font-weight: bold');
        console.log(`%ccart: ${cart.userId}`, 'background-color: yellow; color: black; font-weight: bold'); 
        // Realiza una solicitud para actualizar el carrito en la base de datos
        const updateResponse = await fetch(`https://tiendaapp-a2628-default-rtdb.firebaseio.com/carts/${index}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cart),
        });

        if (!updateResponse.ok) {
          throw new Error(`Error al actualizar el carrito: ${updateResponse.status} - ${updateResponse.statusText}`);
        }

        // Devuelve el carrito actualizado después de la eliminación del producto
        return cart;
      } else {
        // Si no se encuentra el carrito del usuario, devuelve un carrito vacío
        return { userId, products: [] };
      }
    } catch (error) {
      console.error("Error en la solicitud removeProductFromCart:", error);
      throw error;
    }
  }
);

  
  