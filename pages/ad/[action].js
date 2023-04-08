
const AdPost = () => {
  return (
    <div className="ad-form-outer-container">
        <h2 className="page-heading">Post Your Ad and Find Your Buyer</h2>

        <div className="section">
            <h2 className="section-heading">Ad Details : <span>Make sure to include as much information as possible to help buyers understand your product.</span></h2>

            <div className="section-detail-container">
                <h2 className="left-col">Select Category :</h2>
                <div className="right-col">
                    <select name="" id="">
                        <option value="">Cars</option>
                        <option value="">Mobile</option>
                        <option value="">Vehicle</option>
                    </select>
                </div>
            </div>

            <div className="section-detail-container">
                <h2 className="left-col">Ad title :</h2>
                <div className="right-col">
                    <input type="text" value="Auburn Park: Apartment for rent in Westmount London"/>
                    <p className="help-text">Create a clear and descriptive title to accurately represent your listing and catch the buyer's attention.</p>
                </div>
            </div>

            <div className="section-detail-container">
                <h2 className="left-col">Description :</h2>
                <div className="right-col">
                    <textarea name="" id="">
                        Welcome to Auburn Park, a beautiful apartment community located in the desirable Westmount Area of London. Right in the heart of thriving Westmount location, and offering excellent access to the 401, our community is home to professionals, families and those who love being in the centre of it all. 
                    </textarea>
                    <p className="help-text">Provide a detailed description to help buyers understand your listing.</p>
                </div>
            </div>

            <div className="section-detail-container">
                <h2 className="left-col">Tags :</h2>
                <div className="right-col">
                    <input type="text" />
                    <p className="help-text">Increase your ad exposure. Enter up to 5 keywords someone could search to find your ad.</p>
                </div>
            </div>
        </div>
        <div className="section">
            <h2 className="section-heading">Media : <span>Make sure to upload high-quality images or videos that accurately depict your listing.</span></h2>

            <div className="section-detail-container">
                <h2 className="left-col">Photos :</h2>
                <div className="right-col">
                    <input type="text" />
                </div>
            </div>

            <div className="section-detail-container">
                <h2 className="left-col">YouTube Video :</h2>
                <div className="right-col">
                    <input type="text" />
                    <p className="help-text">Add a YouTube video to your listing.</p>
                </div>
            </div>
        </div>
        <div className="section">
            <h2 className="section-heading">Location : <span>Please provide accurate location information to help buyers find your listing.</span></h2>

            <div className="section-detail-container">
                <h2 className="left-col">Location :</h2>
                <div className="right-col">
                    <input type="text" />
                    <p className="help-text">Postal code or street address</p>
                </div>
            </div>
        </div>
        <div className="section">
            <h2 className="section-heading">Contact Information : <span>Please provide accurate contact information so buyers can reach you.</span></h2>

            <div className="section-detail-container">
                <h2 className="left-col">Phone number :</h2>
                <div className="right-col">
                    <input type="text"  value="8795675599" disabled/>
                    <p className="help-text">Your phone number will show up on your listing.</p>
                </div>
            </div>

            <div className="section-detail-container">
                <h2 className="left-col">Email address :</h2>
                <div className="right-col">
                    <input type="text" value="abhinaynarayansingh@appscrip.co" disabled/>
                    <p className="help-text">Your email address will not be shared with others.</p>
                </div>
            </div>
        </div>

        <div className="agree-tc-container">
            <input type="checkbox" name="" id="agree-t&c" />
            <label htmlFor="agree-t&c">By posting your ad, you are agreeing to our <span>Terms & Condition</span> and <span>Privacy & Policy</span></label>
        </div>

        <div>
            <button className="btn">Post Your Ad</button>
            <button className="btn-outline">Preview</button>
        </div>
    </div>
  )
}

export default AdPost