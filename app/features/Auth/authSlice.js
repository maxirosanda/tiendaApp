// AuthSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit"
import {api_key,base_auth_url} from "../../../firebase/auth"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_auth_url }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signUp?key=${api_key}`,
        method: "POST",
        body: auth,
      }),
    }),
    login: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signInWithPassword?key=${api_key}`,
        method: "POST",
        body: auth,
      }),
    }),
  }),
})

export const { useLoginMutation, useSignUpMutation } = authApi;

// Añadimos un slice para manejar el estado de autenticación
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token:null
  },
  reducers: {
    setUser: (state, action) => {
      const { email,token } = action.payload
      state.user = email;
      state.token = token;
    },
    logout: (state) => {
        state.user = null
        state.token = null
      }
  }
})

export const { setUser, clearUser,logout } = authSlice.actions

export default authSlice.reducer