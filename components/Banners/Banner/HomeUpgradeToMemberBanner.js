import Link from 'next/link'
import { navigateToPage } from '@/utils/navigate/navigator'

const HomeUpgradeToMemberBanner = () => {
    return (
        <div className="banners-outer-container">
            <h2>Unlock Exclusive Benefits and Boost Your Business with Adzone Membership!</h2>
            <p>Supercharge your success by upgrading to our premium membership plan.</p>

            <Link href={navigateToPage("switchProfessinal")}>
                <button className="btn-light">Join Now</button>
            </Link>
        </div>
    )
}

export default HomeUpgradeToMemberBanner