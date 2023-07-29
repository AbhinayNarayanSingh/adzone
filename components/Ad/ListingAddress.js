import { useEffect, useState } from 'react'

import useGoogleMapServices from '@/hooks/useGoogleMapServices'
import ClickAwayWrapper from '@/hoc/dialog/ClickAwayWrapper'

const ListingAddress = (props) => {
    const { name = "location", value, changeHandler } = props;

    const [query, setQuery] = useState(value?.formatted_address || "")
    const [predictionShow, setPredictionShow] = useState(false)
    const [userSelect, setUserSelect] = useState(false)
    const [listingLocation, setListingLocation] = useState({})

    const { predictions, latLng, getPlaceAutoComplete, getLatLng } = useGoogleMapServices()
    
    
    const closeoptionDropdown = () => setPredictionShow(false)

    const clickhandler = (predictions) => {
        getLatLng(predictions.place_id)
        setQuery(predictions.formatted_address)

        setListingLocation(predictions)
        setUserSelect(true)
        closeoptionDropdown()
    }
    
    useEffect(() => {
        if (!userSelect) getPlaceAutoComplete(query).then(() => setPredictionShow(true))
    }, [query])
    
    useEffect(() => {
        if (listingLocation?.place_id) {
            changeHandler({
                target:
                {
                    name: name,
                    value: {...listingLocation, ...latLng}
                }
            })
        }
      }, [latLng])

    return (
        <div className='select-input-container'>
            <ClickAwayWrapper onClickAway={closeoptionDropdown}>
                <div>
                    <input type="text" value={query} onChange={(e) => {
                        setUserSelect(false)
                        setQuery(e.target.value)
                    }}/>
                </div>

                {(predictionShow && predictions[0]) && <div className="options-container">
                    <div className='predictions-container'>
                        {predictions.map((predictions, index) => {
                            return (
                                <h2 key={"predictions__" + index} onClick={() => clickhandler(predictions)}
                                className='option'>{predictions.formatted_address}</h2>
                            )
                        })}
                    </div>
                </div>}

            </ClickAwayWrapper>


        </div>
    )
}

export default ListingAddress