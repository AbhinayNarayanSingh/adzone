import ProductCards from "@/hoc/cards/ProductCards";
import { products } from "@/store/product";

const Listings = () => {
  return (
    <>
      <div className="heading-container">
        <p>Listings</p>
        <p>Showing 1 - 7 of 7 results</p>
      </div>
      <div className="listing">
        {products.slice(0, 7).map((item, index) => {
          item["images"] = [item["img-src"]];
          item["short_location"] = item.location;
          item["posted_on"] = "today";
          item["isFeatured"] = item["isFeatured"] || false;
          item["amount"] = item.amount.replace(/[$,]/g, "");

          return <ProductCards data={item} key={"product__" + index} />;
        })}
      </div>
    </>
  );
};

export default Listings;
