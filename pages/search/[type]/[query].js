import ProductCards from "@/hoc/cards/ProductCards"
import { useRouter } from "next/router"

const Search = () => {
  const router = useRouter()
  const {type} = router.query

  const pages = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div className="min-height-container search-page-container">
        <p className="breadcrumb">Home / Search / Real Estate</p>

        <div className="heading-container">
            <h2>Real Estate in London, Ontario</h2>
            <p>Showing 1 - 20 of 93 results</p>
        </div>

        <div className="search-result-container">
            {[...Array(20)].map((_id, index) => {return <ProductCards key={"search-result__"+ index}/>})}

        </div>

        <div className="filter-banner">
            <h2>Our classifieds are the perfect place to find them! Whether you&apos;re buying or selling</h2>
            <p>Post your classified ad today and connect with buyers and sellers near you!</p>
            <button className="btn-light">Post Your Ad Now</button>
        </div>

        <div className="pagination-container">
            <button className="btn-link">Previous</button>
            <div className="pages-container">
                {pages.map((item) => <button key={item} className={`pages ${item === 3 && "current-page"}`}>{item}</button>)}
            </div>
            <button className="btn-link">Next</button>
        </div>

    </div>
  )
}

export default Search