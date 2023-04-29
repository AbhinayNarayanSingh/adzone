import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  isAuth: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAction: (state, action) => {

      state.isAuth = true
      state.name = action.payload
    },
  },
})


export const { loginAction } = authSlice.actions
export default authSlice.reducer