import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TelephoneInput from "@/componentWrapper/input/TelephoneInput";
import TextEditor from "@/componentWrapper/input/Editor";
import withAuth from "@/hoc/OAuth/withAuth";
import BannersMap from "@/components/Banners/BannersMap";
import NewSelect from "@/components/mainComponents/input/NewSelect";
import Icon from "@/components/mainComponents/image/Icon";

import TagsInput from "@/components/Ad/TagsInput";
import AdDurationAndPromotion from "@/components/Ad/AdDurationPromotion";
import LisingImages from "@/components/Ad/LisingImages";
import YoutubeVideo from "@/components/Ad/YoutubeVideo";
import ListingAddress from "@/components/Ad/ListingAddress";
import LinkToWebsite from "@/components/Ad/LinkToWebsite";
import UseAdCost from "@/components/Ad/useAdCost";
import ListingFor from "@/components/Ad/ListingFor";
import { slugfy, uuidGenerator } from "@/utils/helper/slug";
import { postNewListing } from "@/store/slice/listingSlice";

const AdPost = () => {
  const dispatch = useDispatch()
  const {auth, config} = useSelector((state) => state)
  const { user } = auth
  const {categories, currency} = config

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

  const valueHandlerFn = (name) => responseState[name];
  const AdCostHook = UseAdCost()

  const onChangeHandlerFn = (e) => {
    const { name, value, checked, type } = e.target;
    let prevState = { ...responseState };

    // name
    // debugger

    switch (type) {
      case "checkbox":
        prevState[name] = checked;
        break;
      default:
        prevState[name] = value;
        break;
      }
      
    switch (name) {
      // case "category":
      //   prevState["category"] = value.name;
      //   prevState["category_id"] = value._id;
      //   break;
      
      case "listing_for":
        if (value !== "for_sale") prevState["amount"] = 0;
        break;

      case "amount" :
        prevState["listing_for"] = "for_sale"
        break;
        
      case "location" : 
        prevState = { ...responseState, ...value };
        break;

      case "isWebsiteLinkedAd" : 
        if (!checked) prevState["websiteURL"] = "";  
      default:
        break;
    }

    setResponseState(prevState);
  };
  
  // select options
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

  const sumbitHandler = () => {

    let body = {...responseState}
    const {title, tags, images, category} = body

    // first short category
    body["category"] = category.name
    body["category_id"] = category._id

    // form data validation

    const requiredFeilds = [ "amount", "images", "title", "description", "place_id", "country_code", "phone" ]

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

    // add extra data
    let uid = uuidGenerator();
    let slug = slugfy(uid, title, tags);
    let seller = user.name;
    let seller_id = user._id;

    const {listingCost} = AdCostHook

    for (const [k,v] of Object.entries(listingCost["service"])) {
      body[k] = v ? true : false;
    }

    // upload image
    const uploadImage = []

    images.map((img) => {
      if (img?.url && img?.public_id) {
        uploadImage.push({url : img?.url, public_id : img?.public_id})
      } else {
        // upload image and get url & public_id
        uploadImage.push({url : img?.preview, public_id : "public_id"})
      }
    })

    body["images"] = uploadImage

    // update body and call api
    body = {...body, uid, slug, seller, seller_id, currency}
    dispatch(postNewListing(body))

  }

  // const lookForCat = () => {
  //   let category;
  //   let category_id = "6468c5c23d2fe40af7b9c050";

  //   for (let i = 0; i < categoryOptions.length; i++) {
  //     const element = categoryOptions[i];
  //     // debugger
  //     if (element?.value?.["_id"] == category_id) {
  //       category = element
  //       break
  //     }
  //   }

  //   return category
  // }

  // useEffect(() => {
  //   console.log('+++ lookForCat()', lookForCat().jsx);


  // }, [])


  return (
    <div className="ad-form-outer-container">
      {/* {BannersMap("BULK_LISTING_BANNER")} */}
      {/* {JSON.stringify(responseState["category"])} */}


      <h2 className="page-heading">Post Your Ad and Find Your Buyer</h2>

      {/* Ad details */}
      <div className="section">
        <h2 className="section-heading">
          Ad Details :{" "}
          <span>
            Make sure to include as much information as possible to help buyers
            understand your product.
          </span>
        </h2>

        {/* Category */}
        <div className="section-detail-container">
          <h2 className="left-col">Select Category :</h2>
          <div className="right-col">
            <div className="inner-container">

              <NewSelect 
                options={categoryOptions}
                value={valueHandlerFn}
                changeHandler={onChangeHandlerFn}
                name="category"
              />

            </div>
          </div>
        </div>

        {/* Ad title */}
        <div className="section-detail-container">
          <h2 className="left-col">Ad title :</h2>
          <div className="right-col">
            <div className="inner-container">
              <textarea
                name="title"
                value={valueHandlerFn("title")}
                onChange={(e) => onChangeHandlerFn(e)}
              ></textarea>
              <p className="help-text">
                Create a clear and descriptive title to accurately represent
                your listing and catch the buyer&apos;s attention.
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="section-detail-container">
          <h2 className="left-col">Description :</h2>
          <div className="right-col">
            <TextEditor
              name="description"
              value={valueHandlerFn}
              setValue={onChangeHandlerFn}
            />
            <p className="help-text help-text-margin">
              Please provide a thorough and detailed description of your listing to aid buyers in understanding the product better. Keep in mind that the description you provide will be visible on the product detail page, so it&apos;s essential to be as precise and accurate as possible.
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="section-detail-container">
          <h2 className="left-col">Price : </h2>
          <div className="right-col">
            <div className="inner-container">
              <ListingFor
                name="listing_for"
                value={responseState}
                changeHandler={onChangeHandlerFn}
              />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="section-detail-container">
          <h2 className="left-col">Tags :</h2>
          <div className="right-col">
            <div className="inner-container">
              <TagsInput
                name="tags"
                value={responseState}
                changeHandler={onChangeHandlerFn}
              />
            </div>
          </div>
        </div>

        {/* Link to your website */}
        <div className="section-detail-container">
          <h2 className="left-col">Website URL :</h2>
          <div className="right-col">
            <div className="inner-container">
            <LinkToWebsite
                value={responseState}
                changeHandler={onChangeHandlerFn}
                AdCostHook={AdCostHook}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Media */}
      <div className="section">
        <h2 className="section-heading">
          Media :{" "}
          <span>Make sure to upload high-quality images or videos that accurately depict your listing.</span>
        </h2>

        {/* Photos */}
        <div className="section-detail-container">
          <h2 className="left-col">Photos :</h2>
          <LisingImages
            value={responseState}
            changeHandler={onChangeHandlerFn}
          />
        </div>

        {/* Youtube Video */}
        <div className="section-detail-container">
          <h2 className="left-col">YouTube Video :</h2>
          <div className="right-col">
            <div className="inner-container">
              <YoutubeVideo
                name={"youtubeVideoURL"}
                value={responseState}
                changeHandler={onChangeHandlerFn}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="section">
        <h2 className="section-heading">
          Location :{" "}
          <span>
            Please provide accurate location information to help buyers find
            your listing.
          </span>
        </h2>

        <div className="section-detail-container">
          <h2 className="left-col">Location :</h2>
          <div className="right-col">
            <div className="inner-container">
              <ListingAddress
                name="location"
                value={responseState}
                changeHandler={onChangeHandlerFn}
              />
              <p className="help-text">Postal code or street address</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="section">
        <h2 className="section-heading">
          Contact Information :{" "}
          <span>
            Please provide accurate contact information so buyers can reach you.
          </span>
        </h2>

        <div className="section-detail-container">
          <h2 className="left-col">Phone number :</h2>
          <div className="right-col">
            <TelephoneInput 
              formFeild={{
                name: "phone",
              }}
              value={responseState}
              changeHandler={onChangeHandlerFn}
            />
            <p className="help-text">
              Your phone number will show up on your listing.
            </p>
          </div>
        </div>

        <div className="section-detail-container">
          <h2 className="left-col">Email address :</h2>
          <div className="right-col">
            <div className="inner-container">
              <input
                type="text"
                value={responseState["email"]}
                readOnly={true}
              />
              <p className="help-text">
                Your email address will not be shared with others.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Duration & Promotion */}
      <div className="section">
        <h2 className="section-heading">
        Ad Duration & Promotion :{" "}
          <span>
          Enhance Your Ad&apos;s Visibility and Reach.
          </span>
        </h2>


        <div className="section-detail-container">
          <div className="w-100">
            <AdDurationAndPromotion
              AdCostHook={AdCostHook}
            />
          </div>
        </div>

      </div>

      <div className="agree-tc-container">
        <input type="checkbox" name="" id="agree-t&c" />
        <label htmlFor="agree-t&c">
          By posting your ad, you are agreeing to our{" "}
          <span>Terms & Condition</span> and <span>Privacy & Policy</span>
        </label>
      </div>

      <div className="submit-btn-container">
        <button className="btn" onClick={sumbitHandler}>Checkout & Post</button>
        {/* <button className="btn-outline">Preview</button> */}
      </div>
    </div>
  );
};

export default withAuth(AdPost);
