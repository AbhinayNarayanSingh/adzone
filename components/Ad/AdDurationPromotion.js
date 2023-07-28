import UseAdCost from "./useAdCost"

const AdDurationAndPromotion = () => {
    const {listingOption, listingCost, totalCost, totalCostChangeHandler, featureHandler} = UseAdCost()
    
    return (
        <>
            <table className="w-100">
                {listingOption.map((opt, index) => {
                    return (
                        <div className="ad-promotion-outer-container" key={"listingOption__" + index}>
                            <tr className="ad-promotion-container">
                                <td className="listingOption__checkout">
                                    <input
                                        type="checkbox"
                                        name={opt.name}
                                        id={opt.name}
                                        checked={listingCost["service"][opt.name]}
                                        onChange={(e) => featureHandler(e, opt.basePrice)}
                                    />
                                </td>
                                <td className="ad-options"><label htmlFor={opt.name}>{opt.label}</label></td>
                            </tr>
                            <tr className="ad-promotion-container">
                                <td>
                                    <select name={opt.name} className="listingOption__select" value={listingCost["validity"][opt.name]} onChange={(e) => totalCostChangeHandler(e, opt.basePrice)}>
                                        <option value={1}>2 Week</option>
                                        <option value={2}>4 Week</option>
                                        <option value={3}>6 Week</option>
                                        <option value={6}>12 Week</option>
                                    </select>
                                </td>
                                <td className="listingOption__price">{opt.currency} {listingCost["cost"][opt.name] || opt.basePrice}</td>
                            </tr>
                        </div>
                    )
                })}
            </table>
            <p className="listingTotalPrice"><span>Total Price: </span> {"$"}{totalCost()}</p>
        </>
    )
}

export default AdDurationAndPromotion