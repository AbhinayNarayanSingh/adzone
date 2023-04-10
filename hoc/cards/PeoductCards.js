import { postData } from "@/store/staticStore"
import { navigateToPage } from "@/utils/navigate/navigator"
import Link from "next/link"

const PeoductCards = ({data, isSkelton=false}) => {
  const { images, slug, Ad_id, title, short_location, location, description, amount, currency, posted_on, seller, isFeatured=true } = data || postData
  return (
    <Link href={navigateToPage("pdp", slug)} legacyBehavior>
      <div className={`product-outer-card-container ${isSkelton && "skelton"}`}>
        <div className="product-card-container">
          <div className="image-container">
            {isFeatured && <p className="featured">FEATURED</p>}
            <img src={images[0]} alt="" />
          </div>
          <h2>$ {amount}</h2>
          <p>{title}</p>

          <div className="address-date-container">
            <p>{short_location}</p>
            <p>{posted_on}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PeoductCards