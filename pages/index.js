import PeoductCards from "@/hoc/cards/PeoductCards";
import { useState } from "react";


export default function Home() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="homepage-outer-container">

      <div className="homepage-banner">
        <h2>Connect with local buyers and sellers and score great deals on AdZone</h2>
        <p>Join the local marketplace and discover unbeatable bargains on AdZone</p>
        <button className="btn-light">Start posting today!</button>
        {/* <img src={BANNER_PLACEHOLDER} alt="BANNER_PLACEHOLDER" /> */}
      </div>

      <div className="outer-featured-product-container">
        <div className="heading">
          <h2>Featured</h2>
          <button className="btn-link">See All</button>
        </div>
        <div className="featured-product grid">
          <PeoductCards />
          <PeoductCards />
          <PeoductCards />
        </div>
      </div>

      <div className="sign-up-banner">
        <h2>Join AdZone Today and Start Buying and Selling!</h2>
        <p>Sign up now to become a part of our community and find amazing deals!</p>
        <button className="btn-light">Join now!</button>
      </div>

      <div className="outer-product-container">
        <div className="heading">
          <h2>Fresh recommendations</h2>
          <button className="btn-link">See All</button>
        </div>
        <div className="product-container grid">
          <PeoductCards />
          <PeoductCards />
          <PeoductCards />
          <PeoductCards />
          <PeoductCards />
          <PeoductCards />
          <PeoductCards />
          <PeoductCards />
          <PeoductCards />
          <PeoductCards />
        </div>
        <div className="loadmore-btn-container">
          <button className="btn-outline" disabled={loading} onClick={() => setLoading(true)}>
            {loading ? 
              <div className="loading-container">
                <div className="dot-flashing"></div>
                LOADING
              </div>
             : "LOAD MORE"
            }
          </button>
        </div>
      </div>


    </div>
  )
}
