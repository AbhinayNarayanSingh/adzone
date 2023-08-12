import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    loader : false,
    redirectTo : "",
    purpose : ""
}

const loaderSlice = createSlice({
    name : "loader",
    initialState,
    reducers: {
        startLoaderAct : (state, action) => {
            if (!state.loader) {
                state.loader = true

                if (action?.payload != undefined) {
                    state.purpose = action.payload
                }
                
            }
        },
        stopLoaderAct : (state) => {
            state.loader = false
            state.purpose = ""
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