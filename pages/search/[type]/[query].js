import BannersMap from "@/components/Banners/BannersMap";
import ProductCards from "@/componentWrapper/cards/ProductCards";
import useIsMobile from "@/hooks/useIsMobile";
import { products } from "@/store/product";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { type } = router.query;

  const isMobile = useIsMobile();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="min-height-container search-page-container">
      <p className="breadcrumb">Home / Search / Real Estate</p>

      <div className="heading-container">
        <h2>Real Estate in London, Ontario</h2>
        <p>Showing 1 - 20 of 93 results</p>
      </div>

      <div className="search-result-container">
        {products.slice(0, 20).map((item, index) => {
          item["images"] = [item["img-src"]];
          item["short_location"] = item.location;
          item["posted_on"] = "today";
          item["isFeatured"] = item["isFeatured"] || false;
          item["amount"] = item.amount.replace(/[$,]/g, "");

          return <ProductCards data={item} key={"product__" + index} />;
        })}
      
        {BannersMap("FILTER_BANNER")}

      </div>

      <div className="pagination-container">
        {!isMobile && <button className="btn-link btn-size-s">Previous</button>}
        <div className="pages-container">
          {pages.map((item) => (
            <button
              key={item}
              className={`pages ${item === 3 && "current-page"}`}
            >
              {item}
            </button>
          ))}
        </div>
        {!isMobile && <button className="btn-link btn-size-s">Next</button>}
      </div>
    </div>
  );
};

export default Search;
