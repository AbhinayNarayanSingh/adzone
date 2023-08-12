import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { redirectToAct, startLoaderAct, stopLoaderAct } from './loaderSlice'
import { showToastAct } from './toastSlice'
import services from '@/utils/services/services'
import endpoints from '@/utils/services/endpoints'

const initialState = {
    status: 'idle',
    error: null,

    // _id : "",
    // clientSecret : "",
    // paymentIntentID : "",
    // totalCost : "",
    // type : "",
    // narration : "",

    "_id": "64cd270f6d1d79b82312b335",
    "clientSecret": "pi_3NbQr5SAIDSoJ9VZ0346lMfM_secret_ZXjomHJ76aZFG3S2IOI9MIWSg",
    "narration": "Paid Membership - for 3 Month",
    "paymentIntentID": "pi_3NbQr5SAIDSoJ9VZ0346lMfM",
    "totalCost": 24.99,
    "type": "MEMBERSHIP"
}


export const createPaymentIntentAct = createAsyncThunk("checkout/postPaymentIntent", async (body, { dispatch, getState }) => {
    try {
        debugger
        const {loader : {loader}} = getState()
        if (!loader) dispatch(startLoaderAct())
        const { data } = await services.post(endpoints.postPaymentIntent, body)
        debugger
        dispatch(redirectToAct("checkout"))
        dispatch(stopLoaderAct())
        return data
    } catch (error) {
        debugger
        dispatch(stopLoaderAct())
        dispatch(showToastAct({ message: error?.response?.data?.message }))
        throw new Error(error?.response?.data?.message || error?.response?.status);
    }

})

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createPaymentIntentAct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createPaymentIntentAct.fulfilled, (state, action) => {
                state = {...state, 
                    status : 'succeeded', 
                    error : null,
                    ...action.payload
                }
            })
            .addCase(createPaymentIntentAct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });

    }
})

export const { } = checkoutSlice.actions
export default checkoutSlice.reducer