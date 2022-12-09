import axios from "axios";
import {  offersUrl, TOKEN } from "utils/constants";

const params = { 

  }
var config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
        'Authorization': TOKEN
      },
  };
const getAllOffers = async () => {
   const response = await axios.post( offersUrl,params,config);
   console.log("offers"+response.data);
   return response.data as OffersResponse;
  //return data["data"] ;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getAllOffers,

};


     interface State {
        opened: boolean;
    }

     interface Child {
        id: string;
        name: string;
        parent_id: string;
        slug: string;
        image: string;
        banner: string;
        row_order: string;
        status: string;
        clicks: string;
        children: any[];
        text: string;
        state: State;
        level: number;
    }

     interface State2 {
        opened: boolean;
    }

    export interface CategoryData {
        id: string;
        name: string;
        parent_id: string;
        slug: string;
        image: string;
        banner: string;
        row_order: string;
        status: string;
        clicks: string;
        children: Child[];
        text: string;
        state: State2;
        icon: string;
        level: number;
        total: number;
    }

    export interface DataOffers {
        id: string;
        type: string;
        type_id: string;
        image: string;
        date_added: string;
        data: CategoryData[];
    }

    export interface OffersResponse {
        error: boolean;
        data: DataOffers[];
    }






