import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUrl, TOKEN } from "../utils/constants";
import axios from "axios";
//import {initialValues} from "pages-sections/sessions/Login"
export interface initialTypes {
  msg: String;
  user: String;
  token: String;
  loading: boolean;
  error: String;
}
//const token =localStorage.getItem('token')
 // ? localStorage.getItem('token')
  //: null
const initialState: initialTypes = {
  msg: "",
  user: "",
  token:"",
  loading: false,
  error: "",
};

var config = {
  headers: {
    'Accept':"*/*",
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: TOKEN,
  },
};

 export const loginUser = createAsyncThunk('loginuser', async ({email,password}:any) => {
 var bodyFormData = new FormData();
 bodyFormData.append('email',email);
 bodyFormData.append('password', password);
  const response = await axios.post(loginUrl,bodyFormData,
     config);
  console.log(response.data)
 // localStorage.setItem('token', payload.data.data[0].activation_code)

   
   return response.data;

 })
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    //  builder.addCase(loginUser.fulfilled, (state, {payload:{error,msg,token,user}}) => {
    //    state.loading=false;
+
    //    if(error){
    //    state.error=error
    //  }else{
    //    state.msg=msg;
    //    state.token=token;
    //    state.user=user;
    //   localStorage.setItem("msg",msg)
    //   localStorage.setItem('user',(user))
    //     localStorage.setItem('token',token)
    //  }
    //  })
    builder.addCase(loginUser.fulfilled,(state,{payload})=>{
      if(payload.error){
        state.error=payload.error
        state.msg=payload.message
        state.loading = false
        state.user = payload
      }
      else{
        state.error=payload.error
        state.msg=payload.message
        state.loading = false
        state.user = payload
      }
      
     // state.token = payload.data[0].activation_code
      //localStorage.setItem('token', payload.data[0].activation_code)
    })

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const authSelector = (state) => state.auth
export default authSlice.reducer;
