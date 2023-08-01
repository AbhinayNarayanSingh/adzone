import { RoundToDecimal } from '@/utils/helper/numberHelper'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const UseAdCost = () => {

    const {listingOption} = useSelector((state) => state.config)

    const [listingCost, setListingCost] = useState({
        cost: {
            "isActiveAd": 2.49,
            "isFeaturedAd": 0,
            "isHighlightAd": 0,
            "isBumpAd": 0,
            "isWebsiteLinkedAd": 0
        },
        validity: {
            "isActiveAd": 1,
            "isFeaturedAd": 0,
            "isHighlightAd": 0,
            "isBumpAd": 0,
            "isWebsiteLinkedAd": 0
        },
        service: {
            "isActiveAd": 1,
            "isFeaturedAd": 0,
            "isHighlightAd": 0,
            "isBumpAd": 0,
            "isWebsiteLinkedAd": 0
        }
    })
    const [totalCost, setTotalCost] = useState(0)

    const num = (n) => n*1;

    const totalCostFn = () => {
        let arr = Object.values(listingCost.cost)
        arr = arr.reduce((accumulator, i) => accumulator + i).toFixed(2)
        arr = RoundToDecimal(arr)
        setTotalCost(arr)
    }

    const totalCostChangeHandler = (e, basePrice) => {
        let { name, value } = e.target;
        value = num(value)

        let adDurationBasePrice = listingOption.filter((i) => i.name === "isActiveAd")
        adDurationBasePrice = adDurationBasePrice[0]["basePrice"]

        const temp = { ...listingCost }
        temp["cost"][name] = RoundToDecimal(value * basePrice)
        temp["validity"][name] = value
        temp["service"][name] = 1

        if (name !== "isActiveAd" && temp["validity"]["isActiveAd"] < value) {
            temp["cost"]["isActiveAd"] = RoundToDecimal(value * adDurationBasePrice)
            temp["validity"]["isActiveAd"] = value
            temp["service"]["isActiveAd"] = 1
        }
        setListingCost(temp)
    }

    const featureHandler = (e, basePrice, baseValidity=1) => {
        const { name, value, checked, type } = e.target;
        const temp = { ...listingCost }

        if (checked) {
            temp["cost"][name] = RoundToDecimal(basePrice * baseValidity)
            temp["validity"][name] = baseValidity
            temp["service"][name] = 1
        } else {
            temp["cost"][name] = 0
            temp["validity"][name] = 0
            temp["service"][name] = 0
        }
        setListingCost(temp)
    }

    useEffect(() => {
        totalCostFn()
    }, [listingCost])

    return {listingOption, listingCost, totalCost, totalCostChangeHandler, featureHandler}
}

export default UseAdCost