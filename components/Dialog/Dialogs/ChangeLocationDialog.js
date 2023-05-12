import { useEffect, useState } from 'react'
import useGoogleMapServices from '@/hooks/useGoogleMapServices'
import Icon from '@/components/mainComponents/image/Icon'
import { SEARCH_ICON, SETTING_ICON } from '@/Environment'

const ChangeLocationDialog = () => {

  const [query, setQuery] = useState("")
  const [predictionShow, setPredictionShow] = useState(false)
  const [userSelect, setUserSelect] = useState(false)

  const { predictions, latLng, getPlaceAutoComplete, getLatLng, googleMap } = useGoogleMapServices()

  useEffect(() => {
    if (!userSelect) getPlaceAutoComplete(query).then(() => setPredictionShow(true))
  }, [query])

  useEffect(() => {
    googleMap(latLng)
  }, [latLng])

  const clickhandler = (place_id, address) => {
    setUserSelect(true)
    setQuery(address)
    setPredictionShow(false)
    getLatLng(place_id)
  }

  return (
    <div className='change-location-dialog-container'>
      <h2 className='dialog-title'>Where do you want to search?</h2>

      <div className='search-auto-complete'>

        <div className="search-input">
          <Icon src={SEARCH_ICON}/>
          <input type="text" value={query} onChange={(e) => {
            setUserSelect(false)
            setQuery(e.target.value)
            }} placeholder='Address, city or province'/>
          <Icon src={SETTING_ICON}/>
        </div>

        {(predictionShow && predictions[0]) && <div className="predictions-outer-container">
          <div className='predictions-container'>
            {predictions.map((predictions, index) => {
              return (
                <h2 key={"predictions__" + index} onClick={() => clickhandler(predictions.place_id, predictions.formatted_address)}>{predictions.formatted_address}</h2>
              )
            })}
          </div>
        </div>}
      </div>

      <div><div id="map"></div></div>
    </div>
  )
}

export default ChangeLocationDialog