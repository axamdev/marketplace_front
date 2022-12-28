
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { editProfilUrl, TOKEN } from "../utils/constants";
import axios from "axios";

export interface initTypes {
    updated: Boolean;
  }
  const initialState: initTypes = {
    updated:false
  };
  var config = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: TOKEN,
    },
  };
  export const updateUser = createAsyncThunk(
    "loginuser",
    async ({ email, username }: any) => {
      var bodyFormData = new FormData();
      
      bodyFormData.append("email", email);
      bodyFormData.append("username", username);
      const response = await axios.post(editProfilUrl, bodyFormData, config);
      console.log(response.data);     
      return response.data;
    }
  );


const editSlice=createSlice({
    name:"edit",
    initialState,
    reducers:{}
})
export default editSlice.reducer;
