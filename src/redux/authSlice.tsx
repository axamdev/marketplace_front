import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import  { loginUrl, TOKEN } from "../utils/constants";
import axios from "axios";

export interface initialTypes {
  msg:String,
  user:String,
  token:String,
  loading:boolean,
  error:String
  }
const initialState:initialTypes ={
    msg:"",
    user:"",
    token:"",
    loading:false,
    error:""
}
var config = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
      'Authorization': TOKEN
    },
};
export const loginUser = createAsyncThunk('loginuser',async () => {
 
  const response = await axios.post(loginUrl,{ 
    email:"rania2525@gmail.com",
    password:"123456781"
  },config);
   console.log(response.data)
})

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
      addToken:(state,action)=>{
        state.token = localStorage.getItem('token')
      }
      
    },
    extraReducers: {
   
      },
})

export default authSlice.reducer