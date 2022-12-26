import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'
import logReducer from './reducerLg'
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({auth:authReducer,log:logReducer})
export const store =configureStore({
    reducer: rootReducer    
})
export type AppDispatch = typeof store.dispatch;