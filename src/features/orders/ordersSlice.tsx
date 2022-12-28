import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import { orderUrl, TOKEN} from "utils/constants";

export interface  initialTypes{
    createstatus: string,
    clientorders : []
}

const initialState :initialTypes= {
    createstatus: "",
    clientorders : []
}

var config = {
    headers: {  
        'Accept':"*/*",
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': TOKEN
      },
  };

  export const postClientOrder = createAsyncThunk('clientorder',async ({user_id,mobile,product_variant_id,quantity,total,delivery_charge,tax_amount,tax_percentage,final_total,payment_method,address_id,delivery_date,is_wallet_used,delivery_time,
    order_note,active_status}:any) => {

    var bodyFormData = new FormData();
    bodyFormData.append('user_id', user_id);
    bodyFormData.append('mobile', mobile);
    bodyFormData.append('product_variant_id', product_variant_id);
    bodyFormData.append('quantity', quantity);
    bodyFormData.append('total', total);
    bodyFormData.append('delivery_charge', delivery_charge);
    bodyFormData.append('tax_amount', tax_amount);
    bodyFormData.append('tax_percentage', tax_percentage);
    bodyFormData.append('final_total', final_total);
    bodyFormData.append('payment_method', payment_method);
    bodyFormData.append('delivery_charge', delivery_charge);
    bodyFormData.append('address_id', address_id);
    bodyFormData.append('delivery_date', delivery_date);
    bodyFormData.append('is_wallet_used', is_wallet_used);
    bodyFormData.append('delivery_time', delivery_time);
    bodyFormData.append('order_note', order_note);
    bodyFormData.append('active_status', active_status);
    bodyFormData.append('order_note', order_note);
  
     const response = await axios.post(orderUrl,bodyFormData,config);
      console.log("response client Orders : "+response.data);
      console.log(response.data);
      console.log(response.config);
    
     return response.data;
    
  });

  export const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(postClientOrder.pending,(state,action) =>{
            state.createstatus = "loading";
       }),
       builder
       .addCase(postClientOrder.fulfilled,(state,action) =>{
        console.log(action.payload);
        state.createstatus = "success";
        state.clientorders = action.payload.data;
      }),
      builder
        .addCase(postClientOrder.rejected,(state,action) =>{
            state.createstatus = "failure";
       }),
      
    }
})
//selector
export const selectaddstatus = (state) => state.orders.createstatus;
export const ordersSelector = (state) => state.orders
export const selectclientorders = (state) => state.orders.clientorders;



export default ordersSlice.reducer;