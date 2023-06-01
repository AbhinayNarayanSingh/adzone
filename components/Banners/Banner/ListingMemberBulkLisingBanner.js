import Link from 'next/link'
import { navigateToPage } from '@/utils/navigate/navigator'

const ListingMemberBulkLisingBanner = () => {
    return (
        <div className="banners-outer-container" style={{ minWidth: "-webkit-fill-available"}}>
            <h2>Unlock the power of bulk listing & reach a wider audience.</h2>
            <p>Save Time and Boost Your Listing Reach with Adzone Membership!</p>

            <Link href={navigateToPage("switchProfessinal")}>
                <button className="btn-light">Upgrade Now!</button>
            </Link>
        </div>
    )
}

export default ListingMemberBulkLisingBanner