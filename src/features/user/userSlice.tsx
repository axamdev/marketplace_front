import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {useHistory} from "react-router-dom"
import axios from "axios";
import { registerUrl, TOKEN } from "utils/constants";


export interface  initialTypes{
    message: string,
    user: string,
    token:string,
    loading: boolean,
    error: string
}
const initialState :initialTypes= {
    message: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}


export const postSignUpUser = createAsyncThunk('signupuser',async () => {

  var bodyFormData = new FormData();
  bodyFormData.append('name', 'imene');
  bodyFormData.append('email', 'i@gmail.com');
  bodyFormData.append('mobile', '9147258');
  bodyFormData.append('password', '13456789');
  bodyFormData.append('country_code', '216');
//const {name,email,mobile,password,country_code}=formData;
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
    localStorage.setItem("user-info",response.data)
    //history.push("/login")
   return response.data;
  
});


export const userSlice = createSlice({
    name :"user",
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        builder
        .addCase(postSignUpUser.pending,(state,action) =>{
         state.loading = true
       }),
       builder
        .addCase(postSignUpUser.fulfilled,(state,{payload})=>{
         state.loading = false;
        //  if(error){
        //  state.error = error
        //  }else{
        //     state.message = message
        //  }
            state.user = payload
          

       }),
       builder
       .addCase(postSignUpUser.rejected,(state,action)=> {
        state.loading = true
    })
    }
})

export default userSlice.reducer;