import Link from 'next/link'
import { navigateToPage } from '@/utils/navigate/navigator'

const HomeSignUpBanner = () => {
    return (
        <div className="sign-up-banner">
            <h2>Join AdZone Today and Start Buying & Selling!</h2>
            <p>Sign up now to become a part of our community and find amazing deals!</p>

            <Link href={navigateToPage("login")}>
                <button className="btn-light">Join now!</button>
            </Link>
        </div>
    )
}

export default HomeSignUpBanner