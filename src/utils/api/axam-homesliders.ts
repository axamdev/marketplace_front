import axios from "axios";
import Dress from "components/icons/Dress";
import {  sliderhomeUrl, TOKEN } from "utils/constants";

const params = { 

  }
var config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
        'Authorization': TOKEN
      },
  };
const getAllSlidersHome = async () => {
   const response = await axios.post( sliderhomeUrl,params,config);
  //  console.log("Sliderss"+response.data.data);
   return response.data.data;
  //return data["data"] ;
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getAllSlidersHome,

};
