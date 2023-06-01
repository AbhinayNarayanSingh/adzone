import Link from 'next/link'
import { navigateToPage } from '@/utils/navigate/navigator'

const HomeTelegramBanner = () => {
    return (
        <div className="banners-outer-container">
            <h2>Connect with Us on Telegram - Share Your Chat ID for Seamless Communication!</h2>
            <p>Experience personalized updates, quick support, and more, without sharing your phone number.</p>

            <Link href={navigateToPage("setting")}>
                <button className="btn-light">Connect with Telegram</button>
            </Link>
        </div>
    )
}

export default HomeTelegramBanner