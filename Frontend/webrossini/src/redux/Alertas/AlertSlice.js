import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
   name: 'alerta',
   initialState: {
       isVisible: false
   },
   reducers: {
     mostrarAlerta: state => {
         state.isVisible = true
     },
     ocultarAlerta: state => {
         state.isVisible = false
     }
   }
});

export const { mostrarALerta, ocultarAlerta } = alertSlice.actions;

export default alertSlice.reducer;