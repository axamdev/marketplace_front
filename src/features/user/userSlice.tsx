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


export const postSignUpUser = createAsyncThunk('signupuser',async () => {

  var bodyFormData = new FormData();
  bodyFormData.append('name', 'rania 123');
  bodyFormData.append('email', 'rania87975454@gmail.com');
  bodyFormData.append('mobile', '58748788');
  bodyFormData.append('password', 'Azert56789');
  bodyFormData.append('country_code', '216');

var config = {
    headers: {  
        'Accept':"*/*",
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': TOKEN
      },
  };
 //const postSignUpUser = async () => 
   const response = await axios.post(registerUrl,bodyFormData,config);
    console.log("response in post signup user : "+response.data);
    console.log(response.data);
    console.log(response.config);
    console.log(response.headers);

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