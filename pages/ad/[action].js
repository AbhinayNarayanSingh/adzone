import withAuth from "@/hoc/OAuth/withAuth";

import TelephoneInput from "@/componentWrapper/input/TelephoneInput";
import TextEditor from "@/componentWrapper/input/Editor";
import BannersMap from "@/components/Banners/BannersMap";
import NewSelect from "@/components/mainComponents/input/NewSelect";
import TagsInput from "@/components/Ad/TagsInput";
import AdDurationAndPromotion from "@/components/Ad/AdDurationPromotion";
import LisingImages from "@/components/Ad/LisingImages";
import YoutubeVideo from "@/components/Ad/YoutubeVideo";
import ListingAddress from "@/components/Ad/ListingAddress";
import LinkToWebsite from "@/components/Ad/LinkToWebsite";
import ListingFor from "@/components/Ad/ListingFor";
import useListing from "@/components/Ad/Hooks/useListing";

const AdPost = () => {

  const {categoryOptions, responseState, AdCostHook, onChangeHandlerFn, sumbitHandler} = useListing()

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
                value={responseState}
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
                value={responseState["title"]}
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
              value={responseState}
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
