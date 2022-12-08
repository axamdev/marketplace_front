import axios from "axios";
import Dress from "components/icons/Dress";
import { categoriesUrl, TOKEN } from "utils/constants";

const params = { 

  }
var config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
        'Authorization': TOKEN
      },
  };
const getAllCategories = async () => {
   const response = await axios.post(categoriesUrl,params,config);
  //  console.log(response.data);
   return response.data;
  //return data["data"] ;
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getAllCategories,

};
