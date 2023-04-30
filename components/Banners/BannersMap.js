import HomeSignUpBanner from './Banner/HomeSignUpBanner'
import HeroBanner from './Banner/HeroBanner'
import FilterBanner from './Banner/FilterBanner'

const BannersMap = (key) => {
  
    const bannerObj = {
        HERO_BANNER : <HeroBanner/>,
        HERO_SIGNUP_BANNER : <HomeSignUpBanner/>,
        FILTER_BANNER : <FilterBanner/>
    }

  return bannerObj[key]
}

export default BannersMap