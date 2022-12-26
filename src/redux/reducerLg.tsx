import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export interface initialTypes {  
    close: boolean;
   
  }
  const initialState: initialTypes = {
    close: false,
   
  };
const reducerLg = createSlice({
    name: "log",
    initialState,
    reducers: {
        closeLogin:(state,action)=>{
            state.close=true
        }
    },
})
export const logSelector = (state) => state.log
export const { closeLogin} = reducerLg.actions
export default reducerLg.reducer;
