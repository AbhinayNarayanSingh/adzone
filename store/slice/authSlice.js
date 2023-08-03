import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import endpoints from '@/utils/services/endpoints'
import services from '@/utils/services/services'
import { startLoaderAct, stopLoaderAct } from './loaderSlice'
import { showToastAct } from './toastSlice'
import Cookies from 'js-cookie'

const initialState = {
  user : {},
  billingAddress : {
    _id: "64cbd819fb5a96675d7ad1e8",
    user_id: "6497145caa941f8a727ef1ab",
    name: "Abhinay Singh",
    address: "130 Weber St W",
    city: "Kitchener",
    state: "ON",
    country: "Canada",
    countryCode: "+1",
    postalCode: "N2H4A2",
    email: "abhinay@adzone.com",
    phone: "9999955555",
    created_at: "2023-08-03T22:08:49+05:30",
    updated_at: "0001-01-01T00:00:00Z"
  },
  quickLoginUser : {},
  isAuth: false,
  status: 'idle', 
  error: null 
}

const setUserCookies = (token) => {
  Cookies.set("token", token)
  Cookies.set("reference_token", token)
}

export const signInAct = createAsyncThunk("user/signin", async (body,  { dispatch }) => {
  try {
    dispatch(startLoaderAct())
    const {data} = await services.post(endpoints.postSignIn, body)
    setUserCookies(data.token)
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
    setUserCookies(data.token)
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
    setUserCookies(data.token)
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