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
import logReducer from './reducerLg'
import { combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
const persistConfig = { key: 'counter', storage}
const rootReducer = combineReducers({auth:authReducer,log:logReducer,user:userReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)
 const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export default store
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch:()=>AppDispatch=useDispatch