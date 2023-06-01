import Link from 'next/link'
import { navigateToPage } from '@/utils/navigate/navigator'

const HomeSignUpBanner = () => {
    return (
        <div className="banners-outer-container">
            <h2>Join AdZone today and start buying & selling!</h2>
            <p>Sign up now to become a part of our community and find amazing deals!</p>

            <Link href={navigateToPage("login")}>
                <button className="btn-light">Join now!</button>
            </Link>
        </div>
    )
}

export default HomeSignUpBanner