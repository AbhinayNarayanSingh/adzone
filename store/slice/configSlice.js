import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    brandName: "AdZone",
    currency : "CAD",
    currencySymbol : "$",

    isWebsiteLinkedAd: 4.49,

    listingOption: [
        {
            name: "ad-duration",
            label: "Ad Duration",
            basePrice: 2.49,
        },
        {
            name: "feature-ad",
            label: "Feature Ad",
            basePrice: 4.49,
        },
        {
            name: "highlight-ad",
            label: "Highlight Ad",
            basePrice: 4.49,
        },
        {
            name: "bump-ad",
            label: "Bump Ad",
            basePrice: 7.49,
        },
    ]
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {

    },
})

export const { } = configSlice.actions
export default configSlice.reducer