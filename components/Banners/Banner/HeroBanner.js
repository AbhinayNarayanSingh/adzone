import Link from "next/link"
import { navigateToPage } from "@/utils/navigate/navigator"

const HeroBanner = () => {
    return (
        <div className="homepage-banner">
            <h2>Connect with local buyers and sellers and score great deals on AdZone</h2>
            <p>Join the local marketplace and discover unbeatable bargains on AdZone</p>

            <Link href={navigateToPage("newAds")}>
                <button className="btn-light">Start posting today!</button>
            </Link>
        </div>
    )
}

export default HeroBanner