import HomeSignUpBanner from './Banner/HomeSignUpBanner'
import HeroBanner from './Banner/HeroBanner'
import FilterBanner from './Banner/FilterBanner'
import HomeTelegramBanner from './Banner/HomeTelegramBanner'
import HomeUpgradeToMemberBanner from './Banner/HomeUpgradeToMemberBanner'
import ListingMemberBulkLisingBanner from './Banner/ListingMemberBulkLisingBanner'
import HomeFeatureListingBanner from './Banner/HomeFeatureListingBanner'

const BannersMap = (key) => {

  const bannerObj = {
    HERO_BANNER: <HeroBanner />,
    HERO_SIGNUP_BANNER: <HomeSignUpBanner />,
    FILTER_BANNER: <FilterBanner />,
    HOME_TELEGRAM_BANNER: <HomeTelegramBanner />,
    HOME_BECOME_MEMBER_BANNER: <HomeUpgradeToMemberBanner />,
    BULK_LISTING_BANNER: <ListingMemberBulkLisingBanner />,
    HOME_FEATURE_LISTING_BANNER : <HomeFeatureListingBanner/>
  }

  return bannerObj[key]
}

export default BannersMap

// chatgpt promt : i need banner content to "motivate user to feature his listing", needed heading, sub heading and cta button text
// signup >> setup telegram notification >> upgrade to membership >> feature listing banner