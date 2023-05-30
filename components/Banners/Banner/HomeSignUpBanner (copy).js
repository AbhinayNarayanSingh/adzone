import Link from 'next/link'
import { navigateToPage } from '@/utils/navigate/navigator'

const HomeSignUpBanner = () => {
    return (
        <div className="sign-up-banner">
            <h2>Connect with Us on Telegram - Share Your Chat ID for Seamless Communication!</h2>
            <p>Experience personalized updates, quick support, and more, without sharing your phone number.</p>

            <Link href={navigateToPage("login")}>
                <button className="btn-light">Connect with Telegram</button>
            </Link>
        </div>
    )
}

export default HomeSignUpBanner
