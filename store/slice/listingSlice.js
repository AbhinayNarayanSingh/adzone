import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import endpoints from '@/utils/services/endpoints'
import services from '@/utils/services/services'
import { startLoaderAct, stopLoaderAct } from './loaderSlice'
import { showToastAct } from './toastSlice'

const initialState = {
    status: 'idle',
    error: null,

    listing: []
}


export const postNewListing = createAsyncThunk("listing/postNewListing", async (body, { dispatch }) => {
    try {
        dispatch(startLoaderAct())
        const { data } = await services.post(endpoints.postListing, body)
        dispatch(stopLoaderAct())
        return data
    } catch (error) {
        dispatch(stopLoaderAct())
        dispatch(showToastAct({ message: error?.response?.data?.message }))
        throw new Error(error?.response?.data?.message || error?.response?.status);
    }

})

const listingSlice = createSlice({
    name: "listing",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(postNewListing.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(postNewListing.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.listing = action.payload;
                state.error = null;
            })
            .addCase(postNewListing.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });

    }
})

export const { } = listingSlice.actions
export default listingSlice.reducer