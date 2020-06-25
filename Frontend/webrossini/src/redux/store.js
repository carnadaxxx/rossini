import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authSlice } from  './Credenciales/AuthSlice';

// Aqui agregamos los reductores
const reducer = {
    auth: authSlice.reducer,
};


const middleware = [ ...getDefaultMiddleware() ];


const store = configureStore({
    reducer,
    middleware,
})

export default store;