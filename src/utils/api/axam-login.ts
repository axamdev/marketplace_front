import axios from "axios";

import { loginUrl, TOKEN } from "utils/constants";

const params = { 
   
  }
var config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
        'Authorization': TOKEN
      },
  };
const getLogin= async () => {
   const response = await axios.post( loginUrl,params,config);
   console.log("login"+response.data);
   return response.data as IdentificationList 
  //return data["data"] ;
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getLogin

};
export interface DataLogin{
  id: string,
  ip_address: string,
  username: string,
  email: string,
  mobile: string,
  image: string
  balance: string,
  activation_selector: string,
  activation_code:string,
  forgotten_password_selector:string,
  forgotten_password_code:string,
  forgotten_password_time:string,
  remember_selector: string,
  remember_code: string,
  created_on: string,
  last_login: string,
  active:string,
  company: string,
  address: string,
  bonus: string,
  cash_received: string,
  dob: string,
  country_code:string,
  city: string,
  area:string,
  street:string,
  pincode:string,
  apikey:string,
  referral_code:string,
  friends_code:string,
  fcm_id: string,
  latitude:string,
  longitude:string,
  created_at: string
}

export interface IdentificationList {
  error: boolean;
  message: string;
  data: DataLogin[];
}