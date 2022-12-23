
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUrl, TOKEN } from "../utils/constants";
import axios from "axios";
import { CollectionsOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";
import { UserInfo } from "os";
//import {initialValues} from "pages-sections/sessions/Login"
export interface initialTypes {
  msg: String;
  user: String;
  loading: boolean;
  error: String;
  token:String
}
//const token =localStorage.getItem('token')
// ? localStorage.getItem('token')
//: null
const initialState: initialTypes = {
  msg: "",
  user: "",
  loading: false,
  error: "",
  token:""
};

var config = {
  headers: {
    Accept: "*/*",
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: TOKEN,
  },
};

export const loginUser = createAsyncThunk(
  "loginuser",
  async ({ email, password }: any) => {
    var bodyFormData = new FormData();
    bodyFormData.append("email", email);
    bodyFormData.append("password", password);
    const response = await axios.post(loginUrl, bodyFormData, config);
    console.log(response.data.error);
    // localStorage.setItem('token', payload.data.data[0].activation_code)
    // const router = useRouter();
    //router.push("signup");
    return response.data;
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      console.log("payload", payload);
      if (payload.error) {
        state.error = payload.error;
        console.log(state.error, "here error login");
        state.msg = payload.message;
        state.loading = false;
        state.user = payload;
      } else {
        state.error = payload.error;
        state.msg = payload.message;
        state.loading = false;
        state.user = payload.data;
        state.token=payload.data[0].activation_code;
        localStorage.setItem('token', payload.data[0].activation_code)
      }

      //state.token = payload.data[0].activation_code
   
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const authSelector = (state) => state.auth;
export default authSlice.reducer;
