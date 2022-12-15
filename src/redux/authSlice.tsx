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
type CreateUserResponse = {
 email:String,
 password:String
};

var config = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
      'Authorization': TOKEN
    },
};

 export const loginUser = createAsyncThunk('loginuser',async ( ) => {
 
   const response = await axios.post<CreateUserResponse>(loginUrl,{params:{
    email:"rania2525@gmail.com",
   password:"123456781"
   }}
    ,config);
   console.log(response.data)
})
export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
      addToken:(state,action)=>{
        state.token = localStorage.getItem('token')
      },
      addUser:(state,action)=>{
        state.user =localStorage.getItem('user')
      }
      
    },
    extraReducers: (builder)=>{
      builder.addCase(loginUser.pending, (state, action) => {
        state.loading=true
      })
      // builder.addCase(loginUser.fulfilled, (state, {payload:{error,msg,token,user}}) => {
      //   state.loading=false;

      //   if(error){
      //     state.error=error
      //   }else{
      //     state.msg=msg;
      //     state.token=token;
      //     state.user=user;
      //     localStorage.setItem("msg",msg)
      //     localStorage.setItem('user',JSON.stringify(user))
      //     localStorage.setItem('token',token)
      //   }
      // })
      builder.addCase(loginUser.rejected, (state, action) => {
        state.loading=true
      })
      }
   
      }
)
export const {addToken,addUser}=authSlice.actions 
export default authSlice.reducer