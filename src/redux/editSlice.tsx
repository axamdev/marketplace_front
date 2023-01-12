
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { editProfilUrl, TOKEN } from "../utils/constants";
import axios from "axios";

import { RootState } from "./store";
export interface editType {
  username:String;
  email: string;
  dob: string;
  mobile: string;
 
}
export interface initTypes {
   edituser:editType[],
   msg:String,
   error:String,
   username:String,
   mobile:String,
   dob:String,
   loading: boolean;
  }
 
  const initialState: initTypes = {
   edituser:[],
   msg:"",
   error:"",
   username:"",
   mobile:"",
   dob:"",
   loading:false,
  
  };
  var config = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: TOKEN,
    },
  };
 
  export const updateUser = createAsyncThunk(
    "updateuser",
    async ({username ,dob,mobile,address,user_id}:any) => {

      var bodyFormData = new FormData();
      //bodyFormData.append("email", email);
      // bodyFormData.append("user_id",user_id.toFixed(0));
      bodyFormData.append("user_id", user_id)
      //bodyFormData.append("user_id", "15")
      bodyFormData.append("username", username);
      bodyFormData.append('dob', dob);
      bodyFormData.append('mobile',mobile);
      bodyFormData.append('address',address);
      //bodyFormData.append('area', area);
      //bodyFormData.append('city', city);
     //bodyFormData.append('pincode', pincode);

      
      const response = await axios.post(editProfilUrl, bodyFormData, config);
      console.log(response.data);     
      return response.data;
    }
  );
const editSlice=createSlice({
    name:"edit",
    initialState,
    reducers:{},
    extraReducers: async (builder) => {
      builder.addCase(updateUser.pending, (state, action) => {
        state.loading = true;
      });
  
      builder.addCase(updateUser.fulfilled, (state, { payload }) => {
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
          state.loading = true;
          state.edituser = payload.data[0];
          state.username= payload.data[0].username
          state.mobile= payload.data[0].mobile
          state.dob= payload.data[0].dob

        }
  
        //state.token = payload.data[0].activation_code
     
      });
  
      builder.addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
      });
    },
})
export default editSlice.reducer;
export const editSelector = (state:RootState) => state.edit