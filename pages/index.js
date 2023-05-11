import Link from "next/link";
import { useState } from "react";

import Icon from "@/componentWrapper/image/Icon";

import { navigateToSearch } from "@/utils/navigate/navigator";

import { categoryData } from "@/store/staticStore";
import { products } from "@/store/product";

import HeroBanner from "@/components/Banners/Banner/HeroBanner";
import BannersMap from "@/components/Banners/BannersMap";
import ProductCards from "@/componentWrapper/cards/ProductCards";

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="homepage-outer-container">
      <div className="category-container">
        {categoryData.slice(0, 11).map((item, index) => {
          return (
            <div
              key={item.name + "__" + index}
              className={`category-outer-container category-count__${index+1}`}
            >
              <Link href={navigateToSearch(item.name, "c")}>
                <div className="category">
                  <div className="category-icon">
                    <Icon src={item.icon} alt={item.name} size="2.25rem" />
                  </div>
                  <p>{item.name}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {BannersMap("HERO_BANNER")}

      <div className="outer-featured-product-container">
        <div className="heading">
          <h2>Featured</h2>
          <button className="btn-link">See All</button>
        </div>
        <div className="featured-product grid">
          {products.slice(0,4).map((item, index) => {
            item["images"] = [item["img-src"]];
            item["short_location"] = item.location;
            item["posted_on"] = "today";
            item["isFeatured"] = item["isFeatured"] || false;
            item["amount"] = item.amount.replace(/[$,]/g, "");

            return <ProductCards data={item} key={"product__" + index} />;
          })}
        </div>
      </div>

      {BannersMap("HERO_SIGNUP_BANNER")}

      <div className="outer-product-container">
        <div className="heading">
          <h2>Fresh recommendations</h2>
        </div>
        <div className="product-container grid">
          {products.slice(4).map((item, index) => {
            item["images"] = [item["img-src"]];
            item["short_location"] = item.location;
            item["posted_on"] = "today";
            item["isFeatured"] = false;
            item["amount"] = item.amount.replace(/[$,]/g, "");

            return <ProductCards data={item} key={"product__" + index} />;
          })}
        </div>
        <div className="loadmore-btn-container">
          <button
            className="btn-outline btn-size-s"
            disabled={loading}
            onClick={() => setLoading(true)}
          >
            {loading ? (
              <div className="loading-container">
                <div className="dot-flashing"></div>
                LOADING
              </div>
            ) : (
              "LOAD MORE"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
