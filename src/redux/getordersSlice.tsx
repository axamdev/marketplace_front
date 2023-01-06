import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrdersUrl, TOKEN } from "../utils/constants";
import axios from "axios";
import { RootState } from "./store";
import { yellow } from "@mui/material/colors";
export interface itemsType{
     id:String,
     active_status:String,
     product_name:String,
     price:String,
     quantity:String,
     variant_name:String,
     seller_address:String,
     sub_total:String
   }
export interface ordersType {
            id:String,
            user_id: String,
            total_payable:String,
            date_added:String,
            order_items:itemsType[]          
  }
export interface initTypes {
      List:ordersType[]
      msg:String,
      error:String,
      Total:String,
      loading:Boolean
     }
     const initialState: initTypes = {
      List:[],
      msg:"",
      error:"",
      Total:"",
      loading:false,
     };
     var config = {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: TOKEN,
      },
    };
    export const getOrders = createAsyncThunk(
        "getOrders",
        async ({ user_id }: any) => {
          var bodyFormData = new FormData();
          bodyFormData.append("user_id", user_id);
    
          const response = await axios.post(getOrdersUrl, bodyFormData, config);
          console.log(response.data)
          return response.data;
        }
      );
    const getOrdersSlice=createSlice({
        name:"getOrders",
        initialState,
        reducers:{        
        },       
        extraReducers: async (builder) => {
          builder.addCase(getOrders.pending, (state, action) => {
            state.loading = true;
          });     
          builder.addCase(getOrders.fulfilled, (state, { payload }) => {
            
            if (payload.error) {
              state.error = payload.error;
              state.msg = payload.message;
              state.loading = false;
            } else {
              state.error = payload.error;
              state.msg = payload.message;
              state.loading = false;
              state.List = payload.data;
              state.Total=payload.total
    
            }
          });     
          builder.addCase(getOrders.rejected, (state, action) => {
            state.loading = false;
          });
        },
    })
    export default  getOrdersSlice.reducer;
    export const ordersSelector = (state:RootState) => state.getOrd