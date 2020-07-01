import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import  thunk from 'redux-thunk';
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { authSlice } from  './Credenciales/AuthSlice';

// Aqui agregamos los reductores
const reducer = combineReducers({
    auth: authSlice.reducer,
});


const middleware = [ thunk, logger,  ];

const persistConfig = {
    key: 'root',
    whitelist: ['auth', ],
    stateReconciler: autoMergeLevel2,
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware,
})

export default store;


