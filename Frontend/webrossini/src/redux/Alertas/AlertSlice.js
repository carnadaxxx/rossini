import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
   name: 'alert',
   initialState: {
       isAlertVisible: false,
   },
   reducers: {
     showAlert: (state, action) => {
         state.isAlertVisible= true
     },
     hideAlert: state => {
         state.isAlertVisible = false
     }
   }
});

export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;