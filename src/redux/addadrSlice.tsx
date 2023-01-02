
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  addAdressUrl, TOKEN } from "../utils/constants";
import axios from "axios";
import { RootState } from "./store";
export interface adressType {
  id: string;
  user_id: string;
  name: string;
  type: string;
  mobile: string;
  alternate_mobile: string;
  address: string;
  pincode: string;
  country_code: string;
  state: string;
  country: string;
  is_default: string;
}
export interface initTypes {
  newAdress:adressType[]
    msg:String,
    error:String,
    loading:boolean
   }
   const initialState: initTypes = {
    newAdress:[],
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
  export const addAdress = createAsyncThunk(
    "addAdress",
    async ({ user_id}: any) => {
      var bodyFormData = new FormData();
      bodyFormData.append("user_id", user_id);
      //bodyFormData.append("name", name);
      //bodyFormData.append("mobile", mobile);
      const response = await axios.post(addAdressUrl, bodyFormData, config);
     
      return response.data;
    }
  );
  const newadressSlice=createSlice({
    name:"addadress",
    initialState,
    reducers:{
     
    },
    
    extraReducers: async (builder) => {
      builder.addCase(addAdress.pending, (state, action) => {
        state.loading = true;
      });
  
      builder.addCase(addAdress.fulfilled, (state, { payload }) => {
        
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
          state.newAdress= payload.data;

        }
  
        //state.token = payload.data[0].activation_code
     
      });
  
      builder.addCase(addAdress.rejected, (state, action) => {
        state.loading = false;
      });
    },
})
export default newadressSlice.reducer;
