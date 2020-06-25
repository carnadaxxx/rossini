import {createSlice} from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name: 'autentificacion',
    initialState: {
        isLoading: false,
        isAuthenticated: true
    },
    reducers: {
        logIn : state => {
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        logOut : state => {
            state.isAuthenticated = false;
            state.isLoading = false;
        }
    }
});


export const {logIn, logOut}= authSlice.actions;

export default authSlice.reducer;

