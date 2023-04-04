const PeoductCards = ({isSkelton=false, isFeatured=true}) => {
  return (
    <div className={`product-outer-card-container ${isSkelton && "skelton"}`}>
      <div className="product-card-container">
        <div className="image-container">
          {isFeatured && <p className="featured">FEATURED</p>}
          <img src="https://apollo-singapore.akamaized.net/v1/files/7jlzqdpqoe4g3-IN/image;s=780x0;q=60" alt="" />
        </div>
        <h2>$ 16,500</h2>
        <p>I PHONE 11 ( HOLI BUMPER OFFER REFURBISHED )</p>

        <div className="address-date-container">
          <p>Bengaluru, India</p>
          <p>Yesterday</p>
        </div>

      </div>

    </div>
  )
}

export default PeoductCards