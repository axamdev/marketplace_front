
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
const initialadress: adressType={
  id: "",
  user_id: "",
  name: "",
  type: "",
  mobile: "",
  alternate_mobile: "",
  address: "",
  pincode: "",
  country_code: "",
  state: "",
  country: "",
  is_default: "",
}
export interface initTypes {
  newAdress:adressType
    msg:String,
    error:String,
    loading:boolean
   }
   const initialState: initTypes = {
    newAdress:initialadress,
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
//   interface Param {
//     user_id: string;
//     name: String;
//     mobile:String
// }

  export const newAdd= createAsyncThunk(
    "newAdd",
    async ({ user_id,name,mobile,address,alternate_mobile,state}: any) => {
      var bodyFormData = new FormData();
      bodyFormData.append("user_id", user_id);
       bodyFormData.append("name", name);
       bodyFormData.append("mobile", mobile);
        bodyFormData.append("alternate_mobile", alternate_mobile);
       bodyFormData.append("address",address);
        bodyFormData.append("state",state);
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
      builder.addCase(newAdd.pending, (state, action) => {
        state.loading = true;
      });
  
      builder.addCase(newAdd.fulfilled, (state, { payload }) => {
        
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
  
      builder.addCase(newAdd.rejected, (state, action) => {
        state.loading = false;
      });
    },
})
export default newadressSlice.reducer;
export const addAdressSelector = (state:RootState) => state.addadr
