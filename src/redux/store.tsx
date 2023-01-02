
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
import editReducer from'./editSlice';
import adressSlice from './adressSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
//const persistConfig = { key: 'counter', storage}
const rootReducer = combineReducers({auth:authReducer,user:userReducer,edit:editReducer,getAdr:adressSlice})

//const persistedReducer = persistReducer(persistConfig, rootReducer)
 const store = configureStore({
    reducer:rootReducer
    // reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
});
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch:()=>AppDispatch=useDispatch
