
const ListingFor = (props) => {
    const { name, value, changeHandler } = props;

    const listingPur = [
        {
            value :"for_free",
            label : "Free Stuff"
        }, 
        {
            value :"contact",
            label : "Contact"
        }, 
        {
            value :"wanted",
            label : "Wanted"
        }
    ]
    return (
        <div>

            <div>
                <div className="radio-input">
                    <input
                        type="radio"
                        name={name}
                        id="for-sale"
                        className="radio-input_input"
                        value="for_sale"
                        checked={value[name] == "for_sale" ? true : false}
                        onChange={changeHandler}
                    />
                    <label htmlFor="for-sale">For Sale</label>
                </div>
                <input
                    type="text"
                    className="price-input"
                    name="amount"
                    value={value["amount"] || ""}
                    onChange={changeHandler}
                />
            </div>

            {listingPur.map((item, idx) => {
                return (
                    <div className="radio-input" key={item.value+"__"+idx}>
                        <input
                            type="radio"
                            name={name}
                            value={item.value}
                            id={item.value}
                            className="radio-input_input"
                            checked={value[name] == item.value ? true : false}
                            onChange={changeHandler}
                        />
                        <label htmlFor={item.value}>{item.label}</label>
                    </div>

                )
            })}


        </div>
    )
}

export default ListingFor