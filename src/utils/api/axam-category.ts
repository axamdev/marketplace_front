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
    // console.log(response.data);

  //  console.log(response.data);

  // console.log("In api category") ;
  // console.log(typeof response.data["data"][0]["name"])
  // console.log(response.data["data"][0]["name"])
  // console.log(typeof response.data["data"])
   return response.data as DataCategories;
 
  //return data["data"] ;
};

// const getSubCategories = async () => {
//   const response = await axios.post(categoriesUrl,params,config);
//   console.log(response.data.children); 
//  console.log("In api category") ;
//  console.log(typeof response.data["data"][0]["name"])
//  console.log(response.data["data"][0]["name"])
//  console.log(typeof response.data["data"])
//   return response.data.children as ChildCategory[];

//  };

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getAllCategories,
     //getSubCategories
};


   interface StateCategory {
      opened: boolean;
  }



   export interface ChildCategory {
      id: string;
      name: string;
      parent_id: string;
      slug: string;
      image: string;
      banner: string;
      row_order: string;
      status: string;
      clicks: string;
      children?: ChildCategory[];
      text: string;
      state?: StateCategory;
      level: number;
      total?: number;
      icon?: string;
  }
  

   interface PopularCategory {
    id: string;
    name: string;
    parent_id: string;
    slug: string;
    image: string;
    banner: string;
    row_order: string;
    status: string;
    clicks: string;
    children?: ChildCategory[];
    text: string;
    state?: StateCategory;
    level: number;
    total?: number;
    icon?: string;
  }

  export interface DataCategories {
      message: string;
      error: boolean;
      total: number;
      data: ChildCategory[];
      popular_categories: PopularCategory[];
  }



