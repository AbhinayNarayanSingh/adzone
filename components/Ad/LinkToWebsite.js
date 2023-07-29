import { useEffect } from "react";
import { useSelector } from "react-redux";

const LinkToWebsite = (props) => {
    const { value, changeHandler, AdCostHook } = props;
    const { listingCost, featureHandler } = AdCostHook
    
    let name="isWebsiteLinkedAd";
    let urlInputName = "websiteURL";

    const {isWebsiteLinkedAd} = useSelector((state) => state.config)


    useEffect(() => {
        changeHandler({
            target : {
                name : name,
                checked : listingCost["service"][name] ? true : false,
                type : "checkbox"
            }
        })
    }, [listingCost["service"][name]])

    return (
        <>
            <div className="link-to-website-container">
                <input
                    type="checkbox"
                    name={name}
                    id="link-to-website"
                    value={value[name]}
                    checked={listingCost["service"][name]}
                    onChange={(e) => featureHandler(e, isWebsiteLinkedAd)}
                />
                <label htmlFor="link-to-website">Link to your website</label>
            </div>
            <input
                type="text"
                name={urlInputName}
                value={value[urlInputName]}
                onChange={changeHandler}
                readOnly={!value[name]}
            />
            <p className="help-text">
                Website URL feature drives buyers directly to your own site.
            </p>
        </>
    )
}

export default LinkToWebsite