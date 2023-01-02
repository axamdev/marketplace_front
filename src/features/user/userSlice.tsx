import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import { registerUrl, TOKEN} from "utils/constants";
//import {useRouter} from 'next/router'

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

var config = {
  headers: {  
      'Accept':"*/*",
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': TOKEN
    },
};
export const postSignUpUser = createAsyncThunk('signupuser',async ({name,email,mobile,password,country_code}:any) => {

  var bodyFormData = new FormData();
  bodyFormData.append('name', name);
  bodyFormData.append('email', email);
  bodyFormData.append('mobile', mobile);
  bodyFormData.append('password', password);
  bodyFormData.append('country_code', country_code);


  //const router=useRouter;
 //const postSignUpUser = async () => 
   const response = await axios.post(registerUrl,bodyFormData,config);
    console.log("response in post signup user : "+response.data);
    console.log(response.data);
    console.log(response.config);
    console.log(response.headers);
    //localStorage.setItem("user-info",response.data.data[0].activation_code)
   
    //router.push("login")
   return response.data;
  
});


//*****Login *****/
// export const loginUser = createAsyncThunk('loginuser', async ({email,password}:any) => {
//   var bodyFormData = new FormData();
//   bodyFormData.append('email',email);
//   bodyFormData.append('password', password);
//    const response = await axios.post(loginUrl,bodyFormData,
//       config);
//    console.log(response.data)})


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
          

       }),
       builder
       .addCase(postSignUpUser.rejected,(state,action)=> {
        state.loading = true
    })
    }
})
export const userSelector = (state) => state.user
export default userSlice.reducer;