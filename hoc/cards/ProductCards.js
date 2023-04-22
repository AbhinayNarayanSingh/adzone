import { DEFAULT_CURRENCY, DEFAULT_CURRENCY_WORD } from "@/Environment";
import { postData } from "@/store/staticStore";
import { navigateToPage } from "@/utils/navigate/navigator";
import Link from "next/link";

const PeoductCards = ({ data, isSkelton = false, key = 0 }) => {
  const {
    images,
    slug,
    Ad_id,
    title,
    short_location,
    location,
    description,
    amount,
    currency = DEFAULT_CURRENCY,
    currency_word = DEFAULT_CURRENCY_WORD,
    posted_on,
    seller,
    isFeatured,
  } = data || postData;
  return (
    <Link href={navigateToPage("pdp", slug)} legacyBehavior>
      <div
        className={`product-outer-card-container ${isSkelton && "skelton"}`}
        key={key}
      >
        <div className="product-card-container">
          <div className="image-container">
            {isFeatured && <p className="featured">FEATURED</p>}
            <img src={images[0]} alt="" />
            <div className="listing-price">
              <span className="path" />
              <h2>
                {currency_word} <span>{amount}</span>
              </h2>
            </div>
          </div>
          <p>{title}</p>

          <div className="address-date-container">
            <p className="address">{short_location}</p>
            <p className="timestamp">{posted_on}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PeoductCards;
