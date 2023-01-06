import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import { orderUrl, TOKEN} from "utils/constants";

export interface  initialTypes{
    createstatus: string,
    msg: string,
    error: string,
    loading: boolean,
    clientorders : []
}

const initialState :initialTypes= {
    createstatus: "",
    msg: "",
    error: "",
    loading: false,
    clientorders :[]
}

var config = {
    headers: {  
        'Accept':"*/*",
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': TOKEN
      },
  };
//   export interface OrderItemDataTypes {
//     user_id: string;
//     order_id: number;
//     mobile:number;
//     total:number;
//     tax_percentage:number;
//     final_total:number;
//     payment_method:number;
//     address_id:number;
//     delivery_date:number;
//     is_wallet_used:number;
//     delivery_time:number;
//     delivery_charge:number;
//     order_note:number;
//     seller_id: string;
//     product_name: string;
//     variant_name: string;
//     product_variant_id: string;
//     quantity: string;
//     price: number;
//     tax_percent: number;
//     tax_amount: number;
//     sub_total: number;
//     status: string;
//     active_status: string;
//     otp: number;
//     balance: string;
//     error: boolean;
//     message: string;
//     //order_item_data: OrderItemData[];
// }
  export const postClientOrder = createAsyncThunk('clientorder',async ({user_id,mobile,product_variant_id,quantity,total,delivery_charge,tax_amount,tax_percentage,final_total,payment_method,address_id,delivery_date,is_wallet_used,delivery_time,
    order_note,active_status}:any) => {

       
    var bodyFormData = new FormData();
//     data.append('user_id', '15');
// data.append('mobile', '55778899');
// data.append('product_variant_id', '72,73,70');
// data.append('quantity', '1,2,1');
// data.append('total', '1550.00');
// data.append('delivery_charge', '7.0');
// data.append('tax_amount', '0');
// data.append('tax_percentage', '0');
// data.append('final_total', '1557.00');
// data.append('payment_method','COD');
// data.append('address_id', '2');
// data.append('delivery_date', '10/12/2023');
// data.append('is_wallet_used', '0');
// data.append('delivery_time', 'Today - Evening (4:00pm to 7:00pm)');
// data.append('order_note', 'Salut , je veux savoir si vous ');
// data.append('active_status', 'awaiting');
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
    
  


    //console.log(config)
    //console.log(bodyFormData) 
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
       .addCase(postClientOrder.fulfilled,(state,{payload}) =>{
        state.loading = false;
        state.createstatus = "success";
        if(payload.error){
            state.error=payload.error
            state.msg=payload.message
            state.loading = false
            state.clientorders = payload.data
          }
          else{
            state.error=payload.error
            state.msg=payload.message
            state.loading = true
            state.clientorders = payload.data
          }
        
      }),
      builder
        .addCase(postClientOrder.rejected,(state,action) =>{
            state.createstatus = "failure";
            state.loading = true
       })
      
    }  
})

//selector
export const selectaddstatus = (state) => state.orders.createstatus;
export const ordersSelector = (state) => state.orders




export default ordersSlice.reducer;