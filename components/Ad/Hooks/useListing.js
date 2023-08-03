import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UseAdCost from "./useAdCost";

import Icon from "@/components/mainComponents/image/Icon";

import { uploadImageToCloudinary } from "@/utils/helper/cloudinaryHelper";
import { slugfy, uuidGenerator } from "@/utils/helper/slug";
import { postNewListing } from "@/store/slice/listingSlice";

const useListing = () => {
    const dispatch = useDispatch()
    const { auth: { user, billingAddress }, config: { categories, currency, listingOption } } = useSelector((state) => state)
    const AdCostHook = UseAdCost()


    const [responseState, setResponseState] = useState({
        category: "",

        title: "",
        description: "",
        listing_for: "for_sale",

        amount: 0,

        images: [],

        isActiveAd: true,
        isFeaturedAd: true,
        isHighlightAd: true,
        isWebsiteLinkedAd: false,

        tags: [],
        websiteURL: "",
        youtubeVideoURL: "",

        formatted_address: "",
        short_formatted_address: "",
        place_id: "",
        lat: "",
        lng: "",

        country_code: "",
        phone: "",
        email: user?.email || ""
    });

    const onChangeHandlerFn = (e) => {
        const { name, value, checked, type } = e.target;
        let prevState = { ...responseState };

        switch (type) {
            case "checkbox":
                prevState[name] = checked;
                break;
            default:
                prevState[name] = value;
                break;
        }

        switch (name) {
            case "listing_for":
                if (value !== "for_sale") prevState["amount"] = 0;
                break;

            case "amount":
                prevState["listing_for"] = "for_sale"
                break;

            case "location":
                prevState = { ...responseState, ...value };
                break;

            case "isWebsiteLinkedAd":
                if (!checked) prevState["websiteURL"] = "";

            default:
                break;
        }

        setResponseState(prevState);
    };

    const categoryOptionsFn = () => {
        const options = [];
        categories.map((item) => {
            options.push({
                jsx: <>
                    <Icon src={item.icon} />
                    <p className="pl-1">{item.name}</p>
                </>,
                value: item
            })
        })
        return options
    }
    const categoryOptions = categoryOptionsFn()

    const uploadImageFn = async (images) => {
        try {
            const uploadPromises = images.map(async (img) => {
                if (img?.url && img?.public_id) {
                    return { url: img?.url, public_id: img?.public_id };
                } else {
                    return await uploadImageToCloudinary(img.path);
                }
            });
    
            const uploadImage = await Promise.all(uploadPromises);
            return uploadImage;
        } catch (error) {
            console.error(error);
            return [];
        }
    };
    
    const sumbitHandler = async () => {

        let body = { ...responseState }
        const { title, tags, images, category } = body

        // first short category
        body["category"] = category.name
        body["category_id"] = category._id

        // form data validation
        const formValidation = () => {
            const requiredFeilds = ["amount", "images", "title", "description", "place_id", "country_code", "phone"]
    
            for (let i = 0; i < requiredFeilds.length; i++) {
                const element = requiredFeilds[i];
    
                if (element == "amount" && body[element] == 0) {
                    if (body["listing_for"] == "for_sale") {
                        return alert("enter amount")
                    }
                } else if (element == "images") {
                    if (!body[element].length) {
                        return alert("upload image")
                    }
                } else {
                    if (body[element] == "") {
                        return alert("please enter ", element)
                    }
                }
            }
        }
        formValidation()


        // add extra data
        let uid = uuidGenerator();
        let slug = slugfy(uid, title, tags);
        let seller = user.name;
        let seller_id = user._id;

        const { listingCost } = AdCostHook
        const services = []

        for (const [k, v] of Object.entries(listingCost["service"])) {
            body[k] = v ? true : false;
            if ( v ) services.push({
                name : k,
                validity : listingCost["validity"][k]
            })
        }

        const paymentIntentBody = {
            listing_id : "",
            seller_id : user._id,
            type : "LISTING",
            narration : "",
            services : [],
            billingAddress : billingAddress
        }

        let listingDuration = 1;

        for (const service of services) {
            for (const option of listingOption) {
                if (service.name == option.name) {
                    paymentIntentBody?.services.push({
                        _id: option._id,
                        name: option.name,
                        duration : service.validity
                    })

                    if (option.name == "isActiveAd") {
                        listingDuration = service.validity;
                        paymentIntentBody.narration = `Paid Listing - Visibility for ${listingDuration} ${option.unitOfMeasure}`
                    } else {
                        paymentIntentBody.type = "LISTING_AND_PROMOTION"
                        paymentIntentBody.narration = `Paid Listing & Promotion - Visibility for ${listingDuration} ${option.unitOfMeasure}`
                    }
                    continue
                }
            }
        }

        // upload image
        const uploadImage = await uploadImageFn(images)
        body["images"] = uploadImage

        // update body and call api
        body = { ...body, uid, slug, seller, seller_id, currency }
        dispatch(postNewListing({
            body,
            paymentIntentBody
        }))

    }


    return { categoryOptions, responseState, AdCostHook, onChangeHandlerFn, sumbitHandler }
}

export default useListing