import { createSlice } from '@reduxjs/toolkit';
import localforge from 'localforage';


export const authSlice = createSlice({
    name: 'autentificacion',
    initialState: {
        isLoading: false,
        isAuthenticated: null
    },
    reducers: {
        logIn: (state, action) => {
            const token = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
            localforge.setItem('localAuth', {
                'access': token,
                'isAuth': true
            }).catch((error) =>{console.log(error)});
        },
        logOut: state => {
            state.isAuthenticated = false;
            state.isLoading = false;
            localforge.clear().catch((error)=>{console.log(error)});
            localforge.setItem('localAuth', {
                'access': null,
                'isAuth': false
            }).catch((error)=>{console.log(error)});
        },
        logFail: (state, action) => {
            state.isAuthenticated = false;
            state.isLoading = false;
        }
    }
});

export const {logIn, logOut, logFail} = authSlice.actions;

export default authSlice.reducer;

