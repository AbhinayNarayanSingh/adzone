import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import endpoints from '@/utils/services/endpoints'
import services from '@/utils/services/services'
import { startLoaderAct, stopLoaderAct } from './loaderSlice'
import Cookies from 'js-cookie'
import { showToastAct } from './toastSlice'

const initialState = {
  user : {},
  isAuth: false,
  status: 'idle', 
  error: null 
}

export const signInAct = createAsyncThunk("user/signin", async (body,  { dispatch }) => {
  try {
    dispatch(startLoaderAct())
    const {data} = await services.post(endpoints.postSignIn, body)
    Cookies.set("token", data.token)
    Cookies.set("reference_token", data.token)
    dispatch(stopLoaderAct())
    return data
  } catch (error) {
    dispatch(stopLoaderAct())
    dispatch(showToastAct({message : error?.response?.data?.message}))
    throw new Error(error?.response?.data?.message || error?.response?.status);    
  }
})

export const quickSignInAct = createAsyncThunk("user/quick_signin", async (body,  { dispatch }) => {
  try {
    dispatch(startLoaderAct())
    const {data} = await services.post(endpoints.postRefreshToken, body)
    Cookies.set("token", data.token)
    Cookies.set("reference_token", data.token)
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

    builder
      .addCase(quickSignInAct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(quickSignInAct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuth = true
        state.user = action.payload;
      })
      .addCase(quickSignInAct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    // builder.addCase
  },
})


export const { } = authSlice.actions
export default authSlice.reducer