import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
const devHost = "http://5.135.194.236" ;
const devPort = "8181" ;
const devUrl= devHost+":"+devPort+"/app/v1/api/" ;
const jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ0MDkwMjYsImlzcyI6ImVzaG9wIiwiZXhwIjoxNjY0NDEwODI2fQ.R9yCge_10pnDkSjL9aospCdvnRBGYFI4dsOsVaW7fkE"
const loginUrl=devUrl+"login"
 const TOKEN = 'Bearer '+jwt
export const userLogin = createAsyncThunk(
    'login',
    async ({ email, password}, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
                'Authorization': TOKEN
              },
          };
        const { data } = await axios.post(
          loginUrl,
          { email, password },
          config
        )
        console.log("login"+data)
        // store user's token in local storage
        window.localStorage.setItem('userToken', data.activation_code)
        return data
        
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )