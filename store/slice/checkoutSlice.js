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

    "_id": "64cbdfc49a8ffccc54c99502",
    "clientSecret": "pi_3Nb53gSAIDSoJ9VZ1qkTYE14_secret_PQnzFrsdKjPQYhUhJs518Zogt",
    "narration": "Paid Listing & Promotion - Visibility for 2 Weeks",
    "paymentIntentID": "pi_3Nb53gSAIDSoJ9VZ1qkTYE14",
    "totalCost": 2.49,
    "type": "LISTING"
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