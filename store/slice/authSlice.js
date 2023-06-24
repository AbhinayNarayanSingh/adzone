import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import endpoints from '@/utils/services/endpoints'
import services from '@/utils/services/services'
import { startLoaderAct, stopLoaderAct } from './loaderSlice'
import Cookies from 'js-cookie'
import { showToastAct } from './toastSlice'

const initialState = {
  user : {},
  quickLoginUser : {},
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
    Cookies.remove("token")
    Cookies.remove("reference_token")
    dispatch(removeQuickLoginUser())
    dispatch(stopLoaderAct())
    dispatch(showToastAct({message : error?.response?.data?.message}))
    throw new Error(error?.response?.data?.message || error?.response?.status);    
  }
})

export const signUpAct = createAsyncThunk("user/signup", async (payload, { dispatch }) => {
  try {
    dispatch(startLoaderAct())
    
    delete payload.confirm_password
    if (!payload.telegram_chat_id) {
      delete payload.telegram_chat_id
    }
    payload.is_active = true

    const {data} = await services.post(endpoints.postSignUp, payload)
    Cookies.set("token", data.user.token)
    Cookies.set("reference_token", data.user.token)
    dispatch(stopLoaderAct())
    return data.user

  } catch (error) {
    dispatch(stopLoaderAct())
    dispatch(showToastAct({message : error?.response?.data?.message}))
    throw new Error(error?.response?.data?.message || error?.response?.status);    
  }
})

export const logoutHandlerAct = createAsyncThunk("user/logout", async (_, {dispatch}) => {
  dispatch(startLoaderAct())
  Cookies.remove("token")
  // other logic will come here
  dispatch(stopLoaderAct())
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setQuickLoginUser : (state, action) => {
      state.quickLoginUser = action.payload
    },
    removeQuickLoginUser : (state) => {
      state.quickLoginUser = {}
    }
  },
  extraReducers: (builder) => {

    builder
      .addCase(signUpAct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUpAct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuth = true
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUpAct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    builder
      .addCase(signInAct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signInAct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuth = true
        state.user = action.payload;
        state.error = null;
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
        state.error = null;
      })
      .addCase(quickSignInAct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    builder.addCase(logoutHandlerAct.fulfilled, (state) => {
      state.user = {},
      state.isAuth = false,
      state.status = 'idle',
      state.error = null
    })
  },
})


export const { setQuickLoginUser, removeQuickLoginUser } = authSlice.actions
export default authSlice.reducer