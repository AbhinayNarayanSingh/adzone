import { useEffect, useState } from "react";

import Select from "@/componentWrapper/input/Select";
import TelephoneInput from "@/componentWrapper/input/TelephoneInput";
import { categoryData } from "@/store/staticStore";
import TextEditor from "@/componentWrapper/input/Editor";
import { getCroppedImage } from "@/utils/helper/imageCroper";
import withAuth from "@/hoc/OAuth/withAuth";

const AdPost = () => {
  const [responseState, setResponseState] = useState({
    _id: "",
    uid: "1633679888",
    slug: "",

    category: "",
    category_id: "",

    title: "",
    description: "",
    listing_for: "",

    amount: "",
    currency: "CAD",

    images: [],
    posted_on: "",

    isActiveAd: true,
    isFeaturedAd: true,
    isHighlightAd: true,
    isWebsiteLinkedAd: false,

    tags: [],
    websiteURL: "",
    youtubeVideoURL: "",

    seller: "",
    seller_id: "",

    formatted_address: "",
    short_formatted_address: "",
    place_id: "",
    lat: "",
    lng: "",

    country_code: "",
    phone: "",
    email: ""
  });

  const [thumbnailUrl, setThumbnailUrl] = useState(""); // only for preview


  const handleFileInputChange = async (event) => {
    try {
      const croppedImages = responseState["images"];
      const state = {...responseState}

      const files = Array.from(event.target.files);

      for (const imageUrl of files) {
        const croppedImage = await getCroppedImage(imageUrl, "4:3");
        const obj = {
          url : "",
          public_id : "",
          path : croppedImage,
          preview : URL.createObjectURL(croppedImage) 
        }
        croppedImages.push(obj);
      }
      state["images"] = croppedImages
      setResponseState(state)
    } catch (error) {
      console.log("+++ error", error);
    }
  };

  const youtubeVideoPreviewHandler = (e) => {
    const videoUrl = e.target.value;

    // Regex pattern to match the video ID parameter in the URL
    const regex = /(?:\?|&)v=([a-zA-Z0-9_-]{11})(?:&|$)/;

    const match = videoUrl.match(regex);

    if (match) {
      const videoId = match[1];
      setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/0.jpg`);
    }
  };

  const valueHandlerFn = (name) => responseState[name];

  const onChangeHandlerFn = (e) => {
    const { name, value, checked, type } = e.target;
    const prevState = { ...responseState };

    switch (type) {
      case "checkbox":
        prevState[name] = checked;
        break;
      default:
        prevState[name] = value;
        break;
      }
      
    switch (name) {
      case "category":
        prevState["category"] = value.name;
        prevState["category_id"] = value._id;
        break;
      
      case "listing_for":
        if (value !== "for_sale") prevState["amount"] = "";
        break;
    
      default:
        break;
    }

    setResponseState(prevState);
  };

  const tagsHandlerFn = (e) => {
    e.preventDefault();
    e.target.value


  }

  return (
    <div className="ad-form-outer-container">
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
              <Select
                options={categoryData}
                name={"category"}
                valueHandlerFn={valueHandlerFn}
                onChangeHandlerFn={onChangeHandlerFn}
                className="pl-1"
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
              <div>
                <div className="radio-input">
                  <input
                    type="radio"
                    name="listing_for"
                    id="for-sale"
                    className="radio-input_input"
                    value="for_sale"
                    onChange={(e) => onChangeHandlerFn(e)}
                  />
                  <label htmlFor="for-sale">For Sale</label>
                </div>
                <input
                  type="text"
                  className="price-input"
                  name="amount"
                  value={valueHandlerFn("amount")}
                  onChange={(e) => onChangeHandlerFn(e)}
                />
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  name="listing_for"
                  id="for-free"
                  className="radio-input_input"
                  value="for_free"
                  onChange={(e) => onChangeHandlerFn(e)}
                />
                <label htmlFor="for-free">Free Stuff</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  name="listing_for"
                  id="for-swap-trade"
                  className="radio-input_input"
                  value="for_swap_trade"
                  onChange={(e) => onChangeHandlerFn(e)}
                />
                <label htmlFor="for-swap-trade">Swap/Trade</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  name="listing_for"
                  id="contact"
                  className="radio-input_input"
                  value="contact"
                  onChange={(e) => onChangeHandlerFn(e)}
                />
                <label htmlFor="contact">Contact</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  name="listing_for"
                  id="wanted"
                  className="radio-input_input"
                  value="wanted"
                  onChange={(e) => onChangeHandlerFn(e)}
                />
                <label htmlFor="wanted">Wanted</label>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="section-detail-container">
          <h2 className="left-col">Tags :</h2>
          <div className="right-col">
            <div className="inner-container">
              <form action=""><input type="text" name="tags" /></form>
              <p className="help-text">
                Increase your ad exposure. Enter up to 5 keywords someone could
                search to find your ad.
              </p>
              <div className="tags-container">
                <p>#Westmount London</p>
                <p>#Auburn Park</p>
                <p>#Apartment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Link to your website */}
        <div className="section-detail-container">
          <h2 className="left-col">Website URL :</h2>
          <div className="right-col">
            <div className="inner-container">
              <div className="link-to-website-container">
                <input
                  type="checkbox"
                  name="isWebsiteLinkedAd"
                  id="link-to-website"
                  value={valueHandlerFn("isWebsiteLinkedAd")}
                  onChange={(e) => onChangeHandlerFn(e)}
                />
                <label htmlFor="link-to-website">
                  Link to your website ($4.95)
                </label>
              </div>
              <input
                type="text"
                name="websiteURL"
                value={valueHandlerFn("websiteURL")}
                onChange={(e) => onChangeHandlerFn(e)}
              />
              <p className="help-text">
                Website URL feature drives buyers directly to your own site.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Media */}
      <div className="section">
        <h2 className="section-heading">
          Media :{" "}
          <span>
            Make sure to upload high-quality images or videos that accurately
            depict your listing.
          </span>
        </h2>

        {/* Photos */}
        <div className="section-detail-container">
          <h2 className="left-col">Photos :</h2>
          <div
            className={`right-col listing-image-container ${responseState["images"].length > 10 && "disable-image"
              }`}
          >
            <div className="inner-container">
              <label htmlFor="image-input-listing">
                <h2>Choose from your computer or device</h2>
                <p>(up to 10 images)</p>
              </label>

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileInputChange}
                id="image-input-listing"
                disabled={responseState["images"].length > 10}
              />

              <p className="help-text help-text-margin">
                Include pictures with different angles and details. You can
                upload a maximum of 10 photos, that are at least 300px wide or
                tall (we recommend at least 1000px).
              </p>

              {responseState["images"].length > 0 && (
                <div className="image-preview-container">
                  {responseState["images"].map((url) => (
                    <img key={url.preview} src={url.preview} alt="Preview" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Youtube Video */}
        <div className="section-detail-container">
          <h2 className="left-col">YouTube Video :</h2>
          <div className="right-col">
            <div className="inner-container">
              <input
                type="text"
                name="youtubeVideoURL"
                onBlur={youtubeVideoPreviewHandler}
                value={valueHandlerFn("youtubeVideoURL")}
                onChange={(e) => onChangeHandlerFn(e)}
              />
              <p className="help-text">
                Add a YouTube video to your listing e.g.
                http://www.youtube.com/watch?v=:id
              </p>
              {thumbnailUrl && (
                <div className="youtube-video-thumbnail">
                  <img src={thumbnailUrl} alt="Video thumbnail" />
                </div>
              )}
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
              <input type="text" />
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
            <TelephoneInput />
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
                value=""
                disabled
              />
              <p className="help-text">
                Your email address will not be shared with others.
              </p>
            </div>
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
        <button className="btn">Post Your Ad</button>
        <button className="btn-outline">Preview</button>
      </div>
    </div>
  );
};

export default withAuth(AdPost);
