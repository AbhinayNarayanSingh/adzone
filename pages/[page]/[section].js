import Listings from "@/components/Page/Listings"
import PeoductCards from "@/hoc/cards/PeoductCards"

const Profile = () => {
  return (
    <div className="main-section-outer-container">
        <div className="section-col-30">
            <div className="user-profile-card">

                <h3 className="user-profile-character">a</h3>
                <h2>Abhinay Narayan Singh</h2>
                <p>Member since <span>26 Febuary, 2023</span></p>

                <button className="btn">Share profile</button>
                <button className="btn-outline">Report</button>
            </div>

            <div className="sections-conatiner">
                <button>Listings</button>
                <button>Reviews</button>
                <button>Orders</button>
            </div>
        </div>
        <div className="section-col-70 ">
            <Listings/>
        </div>
    </div>
  )
}

export default Profile