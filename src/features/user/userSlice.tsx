import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import signUpUser from "utils/api/axam-RegisterUser";
import axios from "axios";
import { registerUrl, TOKEN } from "utils/constants";


export interface  initialTypes{
    msg: string,
    user: string,
    token:string,
    loading: boolean,
    error: string
}
const initialState :initialTypes= {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

const params = { 
name:"rania ben h",
email:"rania2525@gmail.com",
password:"123456789"
  }
var config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
        'Authorization': TOKEN
      },
  };
export const postSignUpUser = createAsyncThunk('signupuser',async () => {
 //const postSignUpUser = async () => 
   const response = await axios.post(registerUrl,params,config);
    console.log(response.data);
 
   return response.data;
});


export const userSlice = createSlice({
    name :"user",
    initialState,
    reducers : {

    },
    extraReducers : {
    //    [signUpUser.pending]: (state,action) =>{
    //      state.loading = true
    //    },
    //    [signUpUser.fulfilled]: (state,{payload:{error,msg}})=>{
    //      state.loading = false;
    //      if (error){
    //         state.error = error
    //      }else{
    //         state.msg = msg
    //      }
    //    },
    // [signUpUser.rejected]: (state,action)=> {
    //     state.loading = true
    // }
    }
})

export default userSlice.reducer;