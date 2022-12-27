import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/user/userSlice"
import { useDispatch } from 'react-redux'

const store = configureStore({
    reducer: {
      
      user: userReducer,
    },
  })




  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store;
import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'
import logReducer from './reducerLg'
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({auth:authReducer,log:logReducer})
export const store =configureStore({
    reducer: rootReducer    
})
export type AppDispatch = typeof store.dispatch;
