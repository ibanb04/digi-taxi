import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombre: "Juan",
  correo: "test1@test.com",
  password: "123456",
  autenticado: localStorage.getItem("auth") === "true" ? true : false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.nombre = payload.nombre;
      state.correo = payload.correo;
      state.password = payload.password;
      state.autenticado = true;
      localStorage.setItem("auth", true);
    },
    logout: (state) => {
      state.nombre = null;
      state.correo = null;
      state.password = null;
      state.autenticado = false;
      localStorage.setItem("auth", false);
    },
  },
});

export const { login, logout } = auth.actions;

export default auth.reducer;
