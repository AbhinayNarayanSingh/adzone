import { useEffect, useState } from "react";

import Select from "@/hoc/input/Select";
import TelephoneInput from "@/hoc/input/TelephoneInput";
import { categoryData } from "@/store/staticStore";
import TextEditor from "@/hoc/input/Editor";

const AdPost = () => {

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [thumbnailUrl, setThumbnailUrl] = useState('');


    useEffect(() => {
        if (selectedFiles.length === 0) return setPreviewUrls([])
        const newUrls = [];

        for (let i = 0; i < selectedFiles.length; i++) {
            const reader = new FileReader();
            reader.onloadend = () => {
                newUrls.push(reader.result);
                if (newUrls.length === selectedFiles.length) setPreviewUrls(newUrls)
            };
            reader.readAsDataURL(selectedFiles[i]);
        }
    }, [selectedFiles]);

    const handleFileInputChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
    };

    const handleVideoUrl = (e) => {
        const videoUrl = e.target.value;

        // Regex pattern to match the video ID parameter in the URL
        const regex = /(?:\?|&)v=([a-zA-Z0-9_-]{11})(?:&|$)/;

        // Test the regex pattern against the URL
        const match = videoUrl.match(regex);

        if (match) {
            const videoId = match[1];
            setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/0.jpg`);
        }
    };

    return (
        <div className="ad-form-outer-container">
            <h2 className="page-heading">Post Your Ad and Find Your Buyer</h2>

            {/* Ad details */}
            <div className="section">
                <h2 className="section-heading">Ad Details : <span>Make sure to include as much information as possible to help buyers understand your product.</span></h2>

                {/* Category */}
                <div className="section-detail-container">
                    <h2 className="left-col">Select Category :</h2>
                    <div className="right-col">
                        <div className="inner-container">
                            <Select options={categoryData} className="pl-1" />
                        </div>
                    </div>
                </div>

                {/* Ad title */}
                <div className="section-detail-container">
                    <h2 className="left-col">Ad title :</h2>
                    <div className="right-col">
                        <div className="inner-container">
                            <textarea name="" ></textarea>
                            <p className="help-text">Create a clear and descriptive title to accurately represent your listing and catch the buyer's attention.</p>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="section-detail-container">
                    <h2 className="left-col">Description :</h2>
                    <div className="right-col">
                            <TextEditor/>
                            <p className="help-text">Provide a detailed description to help buyers understand your listing.</p>
                    </div>
                </div>

                {/* Price */}
                <div className="section-detail-container">
                    <h2 className="left-col">Price : </h2>
                    <div className="right-col">
                        <div className="inner-container">
                            <div>
                                <div className="radio-input">
                                    <input type="radio" name="price" id="for-sale" className="radio-input_input" />
                                    <label htmlFor="for-sale">For Sale</label>
                                </div>
                                <input type="text" className="price-input" />
                            </div>
                            <div className="radio-input">
                                <input type="radio" name="price" id="for-free" className="radio-input_input" />
                                <label htmlFor="for-free">Free</label>
                            </div>
                            <div className="radio-input">
                                <input type="radio" name="price" id="for-swap-trade" className="radio-input_input" />
                                <label htmlFor="for-swap-trade">Swap / Trade</label>
                            </div>
                            <div className="radio-input">
                                <input type="radio" name="price" id="for-contact" className="radio-input_input" />
                                <label htmlFor="for-contact">Contact</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="section-detail-container">
                    <h2 className="left-col">Tags :</h2>
                    <div className="right-col">
                        <div className="inner-container">
                            <input type="text" />
                            <p className="help-text">Increase your ad exposure. Enter up to 5 keywords someone could search to find your ad.</p>
                            <div className="tags-container">
                                <p>#Auburn Park</p>
                                <p>#Apartment</p>
                                <p>#Westmount London</p>
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
                                <input type="checkbox" name="" id="link-to-website" />
                                <label htmlFor="link-to-website">Link to your website ($4.95)</label>
                            </div>
                            <input type="text" />
                            <p className="help-text">Website URL feature drives buyers directly to your own site.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Media */}
            <div className="section">
                <h2 className="section-heading">Media : <span>Make sure to upload high-quality images or videos that accurately depict your listing.</span></h2>

                {/* Photos */}
                <div className="section-detail-container">
                    <h2 className="left-col">Photos :</h2>
                    <div className={`right-col listing-image-container ${previewUrls.length > 10 && "disable-image"}`}>
                        <div className="inner-container">

                            <label htmlFor="image-input-listing">
                                <h2>Choose from your computer or device</h2>
                                <p>(up to 10 images)</p>
                            </label>

                            <input type="file" multiple accept="image/*" onChange={handleFileInputChange} id="image-input-listing" disabled={previewUrls.length > 10} />

                            <p className="help-text">Include pictures with different angles and details. You can upload a maximum of 10 photos, that are at least 300px wide or tall (we recommend at least 1000px).</p>

                            {previewUrls.length > 0 && <div className="image-preview-container">
                                {previewUrls.map((url) => <img key={url} src={url} alt="Preview" />)}
                            </div>}
                        </div>

                    </div>
                </div>

                {/* Youtube Video */}
                <div className="section-detail-container">
                    <h2 className="left-col">YouTube Video :</h2>
                    <div className="right-col">
                        <div className="inner-container">
                            <input type="text" onBlur={handleVideoUrl} />
                            <p className="help-text">Add a YouTube video to your listing e.g. http://www.youtube.com/watch?v=:id</p>
                            {thumbnailUrl && <div className="youtube-video-thumbnail"><img src={thumbnailUrl} alt="Video thumbnail" /></div>}

                        </div>
                    </div>
                </div>
            </div>

            {/* Location */}
            <div className="section">
                <h2 className="section-heading">Location : <span>Please provide accurate location information to help buyers find your listing.</span></h2>

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
                <h2 className="section-heading">Contact Information : <span>Please provide accurate contact information so buyers can reach you.</span></h2>

                <div className="section-detail-container">
                    <h2 className="left-col">Phone number :</h2>
                    <div className="right-col">
                        <TelephoneInput />
                        <p className="help-text">Your phone number will show up on your listing.</p>
                    </div>
                </div>

                <div className="section-detail-container">
                    <h2 className="left-col">Email address :</h2>
                    <div className="right-col">
                        <div className="inner-container">
                            <input type="text" value="abhinaynarayansingh@appscrip.co" disabled />
                            <p className="help-text">Your email address will not be shared with others.</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="agree-tc-container">
                <input type="checkbox" name="" id="agree-t&c" />
                <label htmlFor="agree-t&c">By posting your ad, you are agreeing to our <span>Terms & Condition</span> and <span>Privacy & Policy</span></label>
            </div>

            <div className="submit-btn-container">
                <button className="btn-outline">Post Your Ad</button>
            </div>
        </div>
    )
}

export default AdPost