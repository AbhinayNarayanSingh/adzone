import { navigateToPage } from "@/utils/navigate/navigator"
import Link from "next/link"

const FilterBanner = () => {
  return (
    <div className="filter-banner">
    <h2>Our classifieds are the perfect place to find them! Whether
      you&apos;re buying or selling</h2>
    <p>Post your classified ad today and connect with buyers and sellers near you!</p>

    <Link href={navigateToPage("newAds")}>
        <button className="btn-light">Post Your Ad Now</button>
    </Link>
  </div>
  )
}

export default FilterBanner