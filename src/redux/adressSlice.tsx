
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  getAdressUrl, TOKEN } from "../utils/constants";
import axios from "axios";
export interface initTypes {
    data:String,
    msg:String,
    error:String,
    loading:boolean
   }
   const initialState: initTypes = {
    data:"",
    msg:"",
    error:"",
    loading:false,
   };
   var config = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: TOKEN,
    },
  };
  export const getAdress = createAsyncThunk(
    "getAdress",
    async ({ user_id }: any) => {
      var bodyFormData = new FormData();
      bodyFormData.append("user_id", user_id);

      const response = await axios.post(getAdressUrl, bodyFormData, config);
      return response.data;
    }
  );
  const adressSlice=createSlice({
    name:"getadress",
    initialState,
    reducers:{},
    extraReducers: async (builder) => {
      builder.addCase(getAdress.pending, (state, action) => {
        state.loading = true;
      });
  
      builder.addCase(getAdress.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        if (payload.error) {
          state.error = payload.error;
          //console.log(state.error, "here error login");
          state.msg = payload.message;
          state.loading = false;
          //state.user = payload;
        } else {
          state.error = payload.error;
          state.msg = payload.message;
          state.loading = false;
          state.data = payload.data;
       

        }
  
        //state.token = payload.data[0].activation_code
     
      });
  
      builder.addCase(getAdress.rejected, (state, action) => {
        state.loading = false;
      });
    },
})
export default adressSlice.reducer;
export const authSelector = (state) => state.getadress