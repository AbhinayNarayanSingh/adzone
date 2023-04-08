import PeoductCards from '@/hoc/cards/PeoductCards'


const Listings = () => {
    return (
        <>
            <div className="heading-container">
                <p>Listings</p>
                <p>Showing 1 - 7 of 7 results</p>
            </div>
            <div className="listing">
                {[...Array(7)].map((item, index) => {
                    return (
                        <PeoductCards />
                    )
                })}
            </div>
        </>
    )
}

export default Listings