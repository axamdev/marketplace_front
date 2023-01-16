import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categoriesUrl, getOrdersUrl, TOKEN } from "../utils/constants";
import axios from "axios";
import { RootState } from "./store";
import { yellow } from "@mui/material/colors";
import { ChildCategory, DataCategories } from "utils/api/axam-category";

export interface initTypes {
    data:DataCategories[]
   message:String,
    error:String,
    total:String,
    loading:Boolean
   }
   const initialState: DataCategories = {
    data:[],
   message:"",
   error:true,
   total:0,
    loading:false,
   };

     
     var config = {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: TOKEN,
      },
    };
    export const getAllCategories = createAsyncThunk(
        "getAllCategories",
        async () => {
          var bodyFormData = new FormData();
          
    
          const response = await axios.post(categoriesUrl, bodyFormData, config);
          console.log(response.data)
          return response.data;
        }
      );
    const getAllCategoriesSlice=createSlice({
        name:"getAllCategories",
        initialState,
        reducers:{        
        },       
        extraReducers: async (builder) => {
          builder.addCase(getAllCategories.pending, (state, action) => {
            state.loading = true;
          });     
          builder.addCase(getAllCategories.fulfilled, (state, { payload }) => {
            
            if (payload.error) {
              state.error = payload.error;
              state.message= payload.message;
              state.loading = false;
            } else {
              state.error = payload.error;
              state.message = payload.message;
              state.loading = false;
              state.data = payload.data;
              state.total=payload.total
    
            }
          });     
          builder.addCase(getAllCategories.rejected, (state, action) => {
            state.loading = false;
          });
        },
    })
    export default  getAllCategoriesSlice.reducer;
    export const categoriesSelector = (state:RootState) => state.getCateg
