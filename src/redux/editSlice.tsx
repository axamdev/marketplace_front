
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { editProfilUrl, TOKEN } from "../utils/constants";
import axios from "axios";

export interface initTypes {
   user:String,
   msg:String,
   error:String,
   loading: boolean;
  
  }
  const initialState: initTypes = {
    user:"",
   msg:"",
   error:"",
   loading:false,
  
  };
  var config = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: TOKEN,
    },
  };
  // export interface userTypes {
  //   username:string,
  //   dob:string,
  //   mobile:string,
  //   adress: string,
  //   user_id:number
   
  //  }
  export const updateUser = createAsyncThunk(
    "updateuser",
    async ({username ,dob,mobile,adress,user_id}:any) => {

      var bodyFormData = new FormData();
      //bodyFormData.append("email", email);
      // bodyFormData.append("user_id",user_id.toFixed(0));
      bodyFormData.append("user_id", user_id)
      //bodyFormData.append("user_id", "15")
      bodyFormData.append("username", username);
      bodyFormData.append('dob', dob);
      bodyFormData.append('mobile',mobile);
      bodyFormData.append('adress',adress);
      
      
      const response = await axios.post(editProfilUrl, bodyFormData, config);
      console.log(response.data);     
      return response.data;
    }
  );
const editSlice=createSlice({
    name:"edit",
    initialState,
    reducers:{},
    extraReducers: async (builder) => {
      builder.addCase(updateUser.pending, (state, action) => {
        state.loading = true;
      });
  
      builder.addCase(updateUser.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        if (payload.error) {
          state.error = payload.error;
          //console.log(state.error, "here error login");
          state.msg = payload.message;
          state.loading = false;
          //state.user = payload;
        } else {
          state.error = payload.error;
          state.msg = payload.message;
          state.loading = false;
          state.user = payload.data[0];
       

        }
  
        //state.token = payload.data[0].activation_code
     
      });
  
      builder.addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
      });
    },
})
export default editSlice.reducer;
