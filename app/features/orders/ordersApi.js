import {createAsyncThunk } from "@reduxjs/toolkit"

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async (userId) => {
  try {
    const response = await fetch(`https://tiendaapp-a2628-default-rtdb.firebaseio.com/orders.json`);
    if (!response.ok) {
      throw new Error(`Error al obtener datos del carrito: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json()
    const orders = Object.values(data)
    const ordersUser = orders.find(item => item.userId == userId)
    return ordersUser.orders
    
  } catch (error) {
    console.error("Error en la solicitud fetchCart:", error)
    throw error
  }
})

export const addOrder = createAsyncThunk(
  "user/addOrder",
  async ({ userId, order }) => {
    try {
      const currentDate = new Date();
      order.date = currentDate.toLocaleDateString(); // Puedes ajustar el formato según tus necesidades
      order.time = currentDate.toLocaleTimeString(); 
      const response = await fetch(`https://tiendaapp-a2628-default-rtdb.firebaseio.com/orders.json`)
      if (!response.ok) {
        throw new Error(`Error al obtener datos del usuario: ${response.status} - ${response.statusText}`)
      }
      const data = await response.json()
      const keysArray = Object.keys(data);
      const orderId = keysArray[0];
      const orders = Object.values(data)
      const ordersUser = orders.find(item => item.userId === userId)
      if (ordersUser) {
        if (!ordersUser.orders) {
          ordersUser.orders = []
        }
        ordersUser.orders.push(order)
        console.log(orderId)
        await fetch(`https://tiendaapp-a2628-default-rtdb.firebaseio.com/orders/${orderId}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ordersUser),
        });
        return ordersUser
      } else {
       
        const newOrdersUser = { userId, orders: [order] }
        const createResponse = await fetch(`https://tiendaapp-a2628-default-rtdb.firebaseio.com/orders.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newOrdersUser),
        })

        if (!createResponse.ok) {
          throw new Error(`Error al crear una nueva orden: ${createResponse.status} - ${createResponse.statusText}`);
        }

        // Devuelve el nuevo carrito creado
        return newOrdersUser
      }
    } catch (error) {
      console.error("Error en la solicitud addOrder:", error);
      throw error;
    }
  }
)

  
  