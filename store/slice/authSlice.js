import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import endpoints from '@/utils/services/endpoints'
import services from '@/utils/services/services'
import { startLoaderAct, stopLoaderAct } from './loaderSlice'
import Cookies from 'js-cookie'

const initialState = {
  user : {},
  isAuth: false,
  status: 'idle', 
  error: null 
}

export const signInAct = createAsyncThunk("user/signin", async (body, { dispatch }) => {
  try {
    dispatch(startLoaderAct())
    const {data} = await services.post(endpoints.postSignIn, body)
    Cookies.set("token", data.token)
    dispatch(stopLoaderAct())
    return data
  } catch (error) {
    dispatch(stopLoaderAct())
    throw new Error(error?.response?.data?.message || error?.response?.status);    
  }
})

export const signUpAct = createAsyncThunk("user/signup", async (body, { dispatch }) => {
  try {
    dispatch(startLoaderAct())
    const {data} = await services.post(endpoints.postSignUp, body)
    console.log('+++ data', data);
    dispatch(stopLoaderAct())
    return data
  } catch (error) {
    dispatch(stopLoaderAct())
    throw new Error(error?.response?.data?.message || error?.response?.status);    
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInAct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signInAct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuth = true
        state.user = action.payload;
      })
      .addCase(signInAct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    // builder.addCase
  },
})


export const { } = authSlice.actions
export default authSlice.reducer