import { useRouter } from 'next/router';
import Link from 'next/link';

import { PROJECT_NAME, VERIFIED_BADGE_ICON } from '@/Environment';
import { navigateToPage } from '@/utils/navigate/navigator';
import Icon from '@/componentWrapper/image/Icon';

import Listings from './Listings';
import Orders from './Orders';
import Reviews from './Reviews';

const ProfilePage = () => {
    const router = useRouter();
    const { section } = router.query;
  
    let profileSection;
  
    switch (section) {
      case "listings":
        profileSection = <Listings />;
        break;
  
      case "orders":
        profileSection = <Orders />;
        break;
  
      case "reviews":
        profileSection = <Reviews />;
        break;
    }
    return (
        <div className="main-section-outer-container">
            <div className="section-col-30">
                <div className="user-profile-card">
                    <h3 className="user-profile-character">a</h3>
                    <h2>
                        Abhinay Narayan Singh
                        <Icon src={VERIFIED_BADGE_ICON} />
                    </h2>
                    <p>
                        On {PROJECT_NAME} since <span>Febuary, 2023</span>
                    </p>

                    {/* <div className="user-profile-actio-btn">
                        <button className="btn">Share profile</button>
                        <button className="btn-outline">Report</button>
                    </div> */}
                </div>

                <div className="sections-conatiner">
                    <Link href={navigateToPage("listings")}>
                        <button>Listings</button>
                    </Link>
                    <Link href={navigateToPage("reviews")}>
                        <button>Reviews</button>
                    </Link>
                    <Link href={navigateToPage("orders")}>
                        <button>Orders</button>
                    </Link>
                </div>
            </div>
            <div className="section-col-70 ">{profileSection}</div>
        </div>
    )
}

export default ProfilePage