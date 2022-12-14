import {createSlice} from '@reduxjs/toolkit'
import { userLogin } from './userAction'
import { useEffect } from "react";
export interface initialTypes {
    loading:boolean,
    userInfo:object, 
    activation_code: string, 
    error: string,
    success: boolean,
  }
const initialState:initialTypes ={
    loading:false,
    userInfo: {}, 
    activation_code: null, 
    error: null,
    success: false,
}

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers: {
        // login user
        [userLogin.pending]: (state) => {
          state.loading = true
          state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.userInfo = payload
          state.activation_code = payload.activation_code
        },
        [userLogin.rejected]: (state, { payload }) => {
          state.loading = false
          state.error = payload
        },
        // register user reducer...
      },
})
export default authSlice.reducer