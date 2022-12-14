import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import signUpUser from "utils/api/axam-RegisterUser";


export interface  initialTypes{
    msg: string,
    user: string,
    token:string,
    loading: boolean,
    error: string
}
const initialState :initialTypes= {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

export const userSlice = createSlice({
    name :"user",
    initialState,
    reducers : {

    },
    extraReducers : {
       [signUpUser.pending]: (state,action) =>{
         state.loading = true
       },
       [signUpUser.fulfilled]: (state,{payload:{error,msg}})=>{
         state.loading = false;
         if (error){
            state.error = error
         }else{
            state.msg = msg
         }
       },
    [signUpUser.rejected]: (state,action)=> {
        state.loading = true
    }
    }
})

export default userSlice.reducer;