import axios from "axios";
import Dress from "components/icons/Dress";
import { registerUrl, TOKEN } from "utils/constants";
import {createAsyncThunk} from "@reduxjs/toolkit"

const params = { 

  }
var config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
        'Authorization': TOKEN
      },
  };
const postSignUpUser = createAsyncThunk('signupuser',async () => {
 
   const response = await axios.post(registerUrl,params,config);
    console.log(response.data);


  console.log("api user") ;
 
   return response.data as UserData;
 
});


// eslint-disable-next-line import/no-anonymous-default-export
export default {

    postSignUpUser,
};


  export interface UserData {
      message: string;
      error: boolean;
      total: number;
      name : string;
      email: string;
      mobile : string;
      password: string;
      country_code: string;
      fcm_id :string
      
  }



