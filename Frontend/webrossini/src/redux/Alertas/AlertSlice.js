import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
   name: 'alert',
   initialState: {
       isAlertVisible: false,
       alertSeverity: null,
       messageAlert: null
   },
   reducers: {
     showAlert: (state, action) => {
         const  { alertSeverity, messageAlert } = action.payload;
         state.isAlertVisible= true;
         state.alertSeverity = alertSeverity;
         state.messageAlert = messageAlert;
     },
     hideAlert: state => {
         state.isAlertVisible = false;
         state.alertSeverity = null;
         state.messageAlert = null;
     }
   }
});

export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;