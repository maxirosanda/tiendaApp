import {createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCart = createAsyncThunk("carts/fetchCart", async (userId) => {
    try {
      const response = await fetch(`https://tiendaapp-a2628-default-rtdb.firebaseio.com/carts.json`);
      if (!response.ok) {
        throw new Error(`Error al obtener datos del carrito: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json()
      const cart = data.find(item => item.userId == userId)
      return cart
      
    } catch (error) {
      console.error("Error en la solicitud fetchCart:", error)
      throw error
    }
  })
  
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
      const data = await response.json()
      const carts = Object.values(data)
      // Encuentra el carrito del usuario por su ID
      const cart =  carts.find(item => item.userId === userId)
      const index =  carts.findIndex(item => item.userId === userId)
      if (cart) {
        // Filtra los productos para mantener solo aquellos que no coincidan con el ID a eliminar
        cart.products = cart.products.filter(product => product.id !== productId);
        // Realiza una solicitud para actualizar el carrito en la base de datos
        const updateResponse = await fetch(`https://tiendaapp-a2628-default-rtdb.firebaseio.com/carts/${index}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cart),
        })

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
)

export const addProductToCart = createAsyncThunk(
  "carts/addProduct",
  async ({ userId, product }) => {
    try {
      // Realiza una solicitud para obtener el carrito actual del usuario
      const response = await fetch(`https://tiendaapp-a2628-default-rtdb.firebaseio.com/carts.json`);
      if (!response.ok) {
        throw new Error(`Error al obtener datos del carrito: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      const carts = Object.values(data);

      // Encuentra el carrito del usuario por su ID
      const cart = carts.find(item => item.userId === userId);
      const index = carts.findIndex(item => item.userId === userId);
      
      if (cart) {
        if (!cart.products) {
          cart.products = [];
        }
      // Busca si el producto ya existe en el carrito
       const existingProductIndex = cart.products.findIndex(p => p.id === product.id);
      // Agrega el nuevo producto al carrito
      
      if (existingProductIndex !== -1) {
        // Si el producto ya existe, incrementa la cantidad
        cart.products[existingProductIndex].quantity += product.quantity;
      } else {
        // Si el producto no existe, agrégalo al carrito
        cart.products.push(product);
      }
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

        // Devuelve el carrito actualizado después de agregar el producto
        return cart;
      } else {
        // Si no se encuentra el carrito del usuario, crea un nuevo carrito con el producto
        const newCart = { userId, products: [product] };

        // Realiza una solicitud para crear un nuevo carrito en la base de datos
        const createResponse = await fetch(`https://tiendaapp-a2628-default-rtdb.firebaseio.com/carts.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCart),
        });

        if (!createResponse.ok) {
          throw new Error(`Error al crear un nuevo carrito: ${createResponse.status} - ${createResponse.statusText}`);
        }

        // Devuelve el nuevo carrito creado
        return newCart;
      }
    } catch (error) {
      console.error("Error en la solicitud addProductToCart:", error);
      throw error;
    }
  }
);

  
  