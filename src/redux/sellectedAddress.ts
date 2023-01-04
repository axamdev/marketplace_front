
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import { RootState } from "./store";


export interface initTypes {
    selectedAdrId:string
   
   }
   const initialState: initTypes = {
    selectedAdrId:'',
   };
  
 
  export const setSelectedAdrId = createAsyncThunk(
    "setSelectedAdrId",
    async (addressId : string) => {
    console.log("addressId")
    console.log(addressId)

      return addressId;
    }
  );
  export const setSelectedAdrIdSlice=createSlice({
    name:"setSelectedAdrId",
    initialState,
    reducers:{
        setID: (state, action) => {
            state.selectedAdrId = action.payload // mutate the state all you want with immer
          },
    },
  
})
export default setSelectedAdrIdSlice.reducer;
export const selectedAdrIdSelector = (state:RootState) => state.selectedAdrId
