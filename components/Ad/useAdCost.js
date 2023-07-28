import { RoundToDecimal } from '@/utils/helper/numberHelper'
import { useState } from 'react'

const listingOption = [
    {
        name: "ad-duration",
        label: "Ad Duration",
        basePrice: 2.49,
        currency: "CAD"
    },
    {
        name: "feature-ad",
        label: "Feature Ad",
        basePrice: 4.49,
        currency: "CAD"
    },
    {
        name: "highlight-ad",
        label: "Highlight Ad",
        basePrice: 4.49,
        currency: "CAD"
    },
    {
        name: "bump-ad",
        label: "Bump Ad",
        basePrice: 7.49,
        currency: "CAD"
    },
]

const UseAdCost = () => {

    const [listingCost, setListingCost] = useState({
        cost: {
            "ad-duration": 2.49,
            "feature-ad": 0,
            "highlight-ad": 0,
            "bump-ad": 0,
            "isWebsiteLinkedAd": 0
        },
        validity: {
            "ad-duration": 1,
            "feature-ad": 0,
            "highlight-ad": 0,
            "bump-ad": 0,
            "isWebsiteLinkedAd": 0
        },
        service: {
            "ad-duration": 1,
            "feature-ad": 0,
            "highlight-ad": 0,
            "bump-ad": 0,
            "isWebsiteLinkedAd": 0
        }
    })

    const totalCost = () => {
        let arr = Object.values(listingCost.cost)
        arr = arr.reduce((accumulator, i) => accumulator + i).toFixed(2)
        return RoundToDecimal(arr)
    }

    const totalCostChangeHandler = (e, basePrice) => {
        const { name, value, checked, type } = e.target;

        let adDurationBasePrice = listingOption.filter((i) => i.name === "ad-duration")
        adDurationBasePrice = adDurationBasePrice[0]["basePrice"]

        const temp = { ...listingCost }
        temp["cost"][name] = RoundToDecimal(value * basePrice)
        temp["validity"][name] = value
        temp["service"][name] = 1

        if (name !== "ad-duration" && temp["validity"]["ad-duration"] < value) {
            temp["cost"]["ad-duration"] = RoundToDecimal(value * adDurationBasePrice)
            temp["validity"]["ad-duration"] = value
            temp["service"]["ad-duration"] = 1
        }
        setListingCost(temp)
    }

    const featureHandler = (e, basePrice) => {
        const { name, value, checked, type } = e.target;
        const temp = { ...listingCost }

        if (checked) {
            temp["cost"][name] = RoundToDecimal(basePrice)
            temp["validity"][name] = 1
            temp["service"][name] = 1
        } else {
            temp["cost"][name] = 0
            temp["validity"][name] = 0
            temp["service"][name] = 0
        }
        setListingCost(temp)
    }

    return {listingOption, listingCost, totalCost, totalCostChangeHandler, featureHandler}
}

export default UseAdCost