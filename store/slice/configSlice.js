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
    listingDuration : "Week",

    listingOption: [
         {
            "_id": "64c8ba555fc2c79f31469dae",
            "name": "isActiveAd",
            "basePrice": 2.490000009536743,
            "label": "Ad Duration",
            "type": "LISTING",
            "unitOfMeasure": "Week",
            "vadility": [
                1,
                2,
                4,
                8,
                12
            ]
        },
        {
            "_id": "64c8bac6e4b4073a45d7567c",
            "basePrice": 2.990000009536743,
            "label": "Feature Ad",
            "name": "isFeaturedAd",
            "type": "LISTING",
            "unitOfMeasure": "Week",
            "vadility": [
                1,
                2,
                4,
                8,
                12
            ]
        },
        {
            "_id": "64c8bc5be4b4073a45d7567d",
            "basePrice": 1.9900000095367432,
            "label": "Highlight Ad",
            "name": "isHighlightAd",
            "type": "LISTING",
            "unitOfMeasure": "Week",
            "vadility": [
                1,
                2,
                4,
                8,
                12
            ]
        },
        {
            "_id": "64c8bc79e4b4073a45d7567e",
            "basePrice": 7.489999771118164,
            "label": "Bump Ad",
            "name": "isBumpAd",
            "type": "LISTING",
            "unitOfMeasure": "Week",
            "vadility": [
                1,
                2
            ]
        },
    ],

    membershipOption : [
        {
            label: "Basic Plan",
            name: "basicPlan",
            amount: 4.99,
            validity: 30
        },
        {
            label: "Individual Plan",
            name: "individualPlan",
            amount: 9.99,
            validity: 90
        },
        {
            label: "Business Plan",
            name: "businessPlan",
            amount: 14.99,
            validity: 180
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
