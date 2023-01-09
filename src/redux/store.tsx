import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userReducer from "../features/user/userSlice"
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import authReducer from './authSlice'


import setSelectedAdrIdSlice from './placeOrders'


import cartReducer from '../features/cart/cartSlice'
import ordersReducer from '../features/orders/ordersSlice'
import editReducer from'./editSlice';
import  getOrdersSlice from "./getordersSlice"
import adressSlice from './adressSlice';
import addadrSlice from "./addadrSlice"
import { combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
//const persistConfig = { key: 'counter', storage}

const rootReducer = combineReducers({auth:authReducer,user:userReducer,cart:cartReducer,orders:ordersReducer,edit:editReducer,getAdr:adressSlice,addadr:addadrSlice,selectedAdrId:setSelectedAdrIdSlice,getOrd:getOrdersSlice})



//const persistedReducer = persistReducer(persistConfig, rootReducer)
 const store = configureStore({
    reducer: rootReducer,
    // reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
});

export default store
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch:()=>AppDispatch=useDispatch
export type RootState = ReturnType<typeof store.getState>
