import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    loader : false,
    redirectTo : ""
}

const loaderSlice = createSlice({
    name : "loader",
    initialState,
    reducers: {
        startLoaderAct : (state) => {
            if (!state.loader) {
                state.loader = true
            }
        },
        stopLoaderAct : (state) => {
            state.loader = false
        },
        redirectToAct : (state, action) => {
            state.redirectTo = action.payload
        },
        redirectResetAct : (state) => {
            state.redirectTo = ""
        }
      },
})

export const { startLoaderAct, stopLoaderAct, redirectToAct, redirectResetAct } = loaderSlice.actions
export default loaderSlice.reducer