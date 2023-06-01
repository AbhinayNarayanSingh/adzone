import Link from 'next/link'
import { navigateToPage } from '@/utils/navigate/navigator'

const HomeFeatureListingBanner = () => {
    return (
        <div className="banners-outer-container">
            <h2>Stand Out from the Crowd with Featured Listings on Adzone!</h2>
            <p>Increase your listing visibility and attract more customers by featuring your listings prominently.</p>

            <Link href={navigateToPage("login")}>
                <button className="btn-light">Feature Now!</button>
            </Link>
        </div>
    )
}

export default HomeFeatureListingBanner