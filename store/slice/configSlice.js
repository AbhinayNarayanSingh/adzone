import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    brandName: "AdZone",
    currency: "CAD",
    currencySymbol: "$",

    origin: {
        name: "Canada",
        dial_code: "+1",
        code: "CA",
    },

    isWebsiteLinkedAd: 4.49,

    listingOption: [
        {
            name: "isActiveAd",
            label: "Ad Duration",
            basePrice: 2.49,
            vadility : [2,4,8,12]
        },
        {
            name: "isFeaturedAd",
            label: "Feature Ad",
            basePrice: 2.99,
            vadility : [2,4,8,12]
        },
        {
            name: "isHighlightAd",
            label: "Highlight Ad",
            basePrice: 1.99,
            vadility : [1,2,4,8,12]
        },
        {
            name: "isBumpAd",
            label: "Bump Ad",
            basePrice: 7.49,
            vadility : [1,2]
        },
    ],

    categories: [
        {
            "_id": "6468c5c23d2fe40af7b9c049",
            "icon": "/images/category/Cars.svg",
            "name": "Cars",
            "sub_category": []
        },
        {
            "_id": "6468c5c23d2fe40af7b9c04a",
            "icon": "/images/category/Mobiles.svg",
            "name": "Mobiles",
            "sub_category": []
        },
        {
            "_id": "6468c5c23d2fe40af7b9c04b",
            "icon": "/images/category/Properties.svg",
            "name": "Properties",
            "sub_category": []
        },
        {
            "_id": "6468c5c23d2fe40af7b9c04c",
            "icon": "/images/category/Electronics.svg",
            "name": "Appliances",
            "sub_category": []
        },
        {
            "_id": "6468c5c23d2fe40af7b9c04e",
            "icon": "/images/category/Pets.svg",
            "name": "Pets",
            "sub_category": []
        },
        {
            "_id": "6468c5c23d2fe40af7b9c04d",
            "icon": "/images/category/Furniture.svg",
            "name": "Furniture",
            "sub_category": []
        },
        {
            "_id": "6468c5c23d2fe40af7b9c04f",
            "icon": "/images/category/Jobs.svg",
            "name": "Jobs",
            "sub_category": []
        },
        {
            "_id": "6468c5c23d2fe40af7b9c050",
            "icon": "/images/category/Books.svg",
            "name": "Books, Sports & Hobbies",
            "sub_category": []
        },
        {
            "_id": "6468c5c23d2fe40af7b9c051",
            "icon": "/images/category/Sports.svg",
            "name": "Sports Equipment",
            "sub_category": []
        },
        {
            "_id": "6468c5c23d2fe40af7b9c052",
            "icon": "/images/category/Services.svg",
            "name": "Services",
            "sub_category": []
        },
        {
            "_id": "6468c5c23d2fe40af7b9c053",
            "icon": "/images/category/Others.svg",
            "name": "Others",
            "sub_category": []
        }
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