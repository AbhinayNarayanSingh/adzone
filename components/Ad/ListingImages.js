import { getCroppedImage } from '@/utils/helper/imageCroper';

const ListingImages = (props) => {
    const { name = "images", value, changeHandler } = props;

    const handleFileInputChange = async (event) => {
        try {
            const croppedImages = value["images"];

            const files = Array.from(event.target.files);

            for (const imageUrl of files) {
                const croppedImage = await getCroppedImage(imageUrl, "4:3");
                const obj = {
                    url: "",
                    public_id: "",
                    path: croppedImage,
                    preview: URL.createObjectURL(croppedImage)
                }
                croppedImages.push(obj);
            }

            changeHandler({
                target:
                {
                    name: name,
                    value: croppedImages
                }
            })
        } catch (error) {
            console.log("+++ error", error);
        }
    };

    return (
        <div className={`right-col listing-image-container ${value["images"].length > 10 && "disable-image"}`}>
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
                    disabled={value["images"].length > 10}
                />

                <p className="help-text help-text-margin">
                    Include pictures with different angles and details. You can
                    upload a maximum of 10 photos, that are at least 300px wide or
                    tall (we recommend at least 1000px).
                </p>

                {value["images"].length > 0 && (
                    <div className="image-preview-container">
                        {value["images"].map((url) => {
                            if (url.preview) {
                                return <img key={url.preview} src={url.preview} alt="Preview" />
                            } else if (url.public_id) {
                                return <img key={url.url} src={url.url} alt="Preview" />
                            }
                        }
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ListingImages