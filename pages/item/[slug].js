import { NEXT_BUTTON_ICON, PREVIOUS_BUTTON_ICON } from "@/Environment"
import Icon from "@/hoc/image/Icon"
import { postData } from "@/store/staticStore"
import Image from "next/image"


const Item = () => {
    const { images, Ad_id, title, location, description, amount, currency, posted_on, seller } = postData

    return (
        <div className="min-height-container item-detail-page-container">
            <p className="breadcrumb">Home / {title} / Ad ID {Ad_id}</p>

            <div className="item-details-outer-container">
                <div className="left-col">

                    <div className="image-container">
                        <Image src={images[0]} fill={true} object-fit="cover" />

                        <div className="image-slider-button-container">
                            <button><Icon src={PREVIOUS_BUTTON_ICON} alt="previous" size="3rem"/></button>
                            <button><Icon src={NEXT_BUTTON_ICON} alt="next" size="3rem"/></button>
                        </div>
                    </div>

                    <div className="item-title-container section">
                        <div>
                            <h2 className="title">{title}</h2>
                            <p className="location">{location} <button className="btn-link px-05">(View Map)</button></p>
                            <p className="posted-on">Posted about {posted_on}</p>
                        </div>
                        <h2 className="amount">{currency} {amount}</h2>
                    </div>
                    <div className="section description-container">
                        <h2 className="item-details-sub-title">Description</h2>
                        <div dangerouslySetInnerHTML={{ __html: description }} className="description-container__description"/>
                    </div>
                </div>
                <div className="right-col">
                    <div className="ad-report-container section">

                        <h2>AD ID {Ad_id}</h2>
                        <button className="btn-link p-0">Report</button>
                    </div>
                    <div className="contact-seller-container section">
                        <h2 className="item-details-sub-title">Contact : {seller}</h2>

                        <form action="">
                            <textarea name="" id="" >
                            Hi, I&apos;m interested! Please contact me if this is still available.
                            </textarea>

                            <button className="btn send-message-btn" disabled>Send Message</button>
                        </form>

                        <p className="message-help-txt">Caution: Be careful when communicating with other users. Do not give out personal information or send money until you are sure the other user is trustworthy. Adzone is not responsible for any fraudulent activity. Report any suspicious activity to our support team.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Item