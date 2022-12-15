import axios from "axios";
import Dress from "components/icons/Dress";
import { registerUrl, TOKEN } from "utils/constants";
import {createAsyncThunk} from "@reduxjs/toolkit"

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
//const postSignUpUser = createAsyncThunk('signupuser',async () => {
 const postSignUpUser = async () => {
   const response = await axios.post(registerUrl,params,config);
    console.log(response.data);
 
   return response.data as UserData;
 
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {

    postSignUpUser,
};


  export interface RegisterData {
      name : string;
      email: string;
      mobile : string;
      password: string;
      country_code: string;
      fcm_id :string
      
  };


  export interface UserData {
    message: string;
    error: boolean;
    data :RegisterData[];
    
}



