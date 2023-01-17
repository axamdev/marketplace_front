
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  productsUrl, TOKEN } from "../utils/constants";
import axios from "axios";
import { RootState } from "./store";
import { Productsdata, ProductsResponse } from "utils/api/axam-products";


export interface initTypes {
    data:Productsdata[],
    total?: string,
    error:boolean,
    loading:boolean,
    min_price?: string,
    max_price?: string,
   }
   const initialState: initTypes = {
    data:[],
    total: "",
    error:false,
    loading:false,
    min_price:"",
    max_price:""
   };
   var config = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: TOKEN,
    },
  };
//   interface Param {
//     user_id: string;
//     name: String;
//     mobile:String
// }

type MyArguments = {
    category_id? : string | null;
    id? : string | null;
    search? : string | null;
    min_price? : string | null;
    max_price? : string | null;
    sort? : string | null;
    order?: string | null;
    tags?: string | null;
    attribute_value_ids?: string | null;
    limit?: string | null;
    offset?: string | null;
    is_similar_products? : string | null;
    top_rated_product?: string | null;
    discount?: string | null;
    seller_id?: string | null;
}
  export const getProducts= createAsyncThunk(
    "getProducts",
    async ({ category_id,id,search,min_price, max_price,sort,order,tags,attribute_value_ids,limit,offset,is_similar_products,
        top_rated_product,discount,seller_id}: Partial<MyArguments> = {}) => {

      var bodyFormData = new FormData();
      if (category_id ) bodyFormData.append("category_id", category_id);
      if (id ) bodyFormData.append("id", id);
      if (search ) bodyFormData.append("search", search);
      if (min_price ) bodyFormData.append("min_price", min_price);
      if (max_price ) bodyFormData.append("max_price", max_price);
      if (sort ) bodyFormData.append("sort", sort);
      if (order ) bodyFormData.append("order", order);
      if (tags ) bodyFormData.append("tags", tags);
      if (attribute_value_ids ) bodyFormData.append("attribute_value_ids", attribute_value_ids);
      if (limit ) bodyFormData.append("limit", limit);
      if (offset ) bodyFormData.append("offset", offset);
      if (is_similar_products ) bodyFormData.append("is_similar_products", is_similar_products);
      if (discount ) bodyFormData.append("discount", discount);
      if (top_rated_product ) bodyFormData.append("top_rated_product", top_rated_product);
      if (seller_id ) bodyFormData.append("seller_id", seller_id);
      const response = await axios.post(productsUrl, bodyFormData, config);
     
      return response.data;
    }
  );
  const getProductsSlice=createSlice({
    name:"getProducts",
    initialState,
    reducers:{
     
    },
    
    extraReducers: async (builder) => {
      builder.addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      });
  
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        
        if (payload.error) {
            state.data= [];
            state.total="0"
          state.loading = false;
          //state.user = payload;
        } else {
             state.loading = false;
         
             if 
             ( state.error==true){
                state.data= [];
                state.total="0"

             }
             if 
         ( state.error==false)
         
          {state.data= payload.data;
          state.total=payload.total;
         state.max_price=payload.max_price;
        state.min_price=payload.min_price}
          else
          {state.data= [];
            state.total="0"
        
        }
        }
  
        //state.token = payload.data[0].activation_code
     
      });
  
      builder.addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
      });
    },
})
export default getProductsSlice.reducer;
export const getProductsSliceSelector = (state:RootState) => state.getProd
