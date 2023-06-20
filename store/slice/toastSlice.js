import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
    isError: true,
    message: ""
}


export const showToastAct = createAsyncThunk("toast/show_toast", async (data, { dispatch }) => {
    setTimeout(() => {
        dispatch(hideToastAct())
    }, 10000)
    return data
})


const toastSlice = createSlice({
    name : "toast",
    initialState,
    reducers: {
        hideToastAct : (state) => {
            state.show = false,
            state.isError = true,
            state.message = ""
        }
      },
      extraReducers: (builder) => {
          builder.addCase(showToastAct.fulfilled, (state, action) => {
            state.show = true,
            state.isError = action?.payload?.isError || true,
            state.message = action?.payload?.message
          })
      }
})

export const { hideToastAct } = toastSlice.actions
export default toastSlice.reducer