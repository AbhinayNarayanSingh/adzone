import ProductCards from "@/hoc/cards/ProductCards";

const Listings = () => {
  return (
    <>
      <div className="heading-container">
        <p>Listings</p>
        <p>Showing 1 - 7 of 7 results</p>
      </div>
      <div className="listing">
        {[...Array(9)].map((item, index) => {
          return <ProductCards key={"listing__" + index} />;
        })}
      </div>
    </>
  );
};

export default Listings;
