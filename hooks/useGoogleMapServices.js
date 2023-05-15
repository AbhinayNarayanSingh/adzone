import { DEFAULT_LAT, DEFAULT_LNG } from '@/Environment'
import { useState } from 'react'

const useGoogleMapServices = () => {
    const [predictions, setPredictions] = useState([])
    const [latLng, setLatLng] = useState({
        lat: DEFAULT_LAT,
        lng: DEFAULT_LNG
    })
    const [AddressFormAutocomplete, setAddressFormAutocomplete] = useState({
        state: "",
        city: "",
        country: "",
        lat: 0,
        lng: 0,
    })

    const getPlaceAutoComplete = async (input) => {
        const predictionArray = []
        const autocompleteService = new google.maps.places.AutocompleteService();

        autocompleteService.getPlacePredictions({ input: input }, function (predictions, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                predictions?.forEach(prediction => predictionArray.push({
                    formatted_address: prediction.description,
                    short_formatted_address: prediction?.structured_formatting?.secondary_text,
                    place_id: prediction.place_id
                })
                );
                setPredictions(predictionArray)
        }
        });
    }

    const placesService = (placeId, fields, callback) => {
        const service = new google.maps.places.PlacesService(document.createElement("div"));
        service.getDetails({ placeId: placeId, fields: fields }, (result, status) => callback(status, result));
    }

    const getLatLng = (placeId) => {
        try {
            const fields = ["geometry"]
            placesService(placeId, fields, (status, result) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    const { geometry } = result
                    const latLng = {
                        lat: geometry.location.lat(),
                        lng: geometry.location.lng()
                    }
                    setLatLng(latLng)
                }
            })
        } catch (error) {
            console.error('+++ error', error);
        }
    }

    const getAddressFormAutocomplete = (placeId) => {
        try {
            const fields = ["address_components", "geometry"]
            placesService(placeId, fields, (status, result) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    const { geometry, address_components } = result
                    const data = {}

                    data["lat"] = geometry?.location?.lat()
                    data["lng"] = geometry?.location?.lng()

                    address_components.forEach(obj => {
                        data[obj.types[0]] = obj.long_name
                        if (obj.types[1]) data[obj.types[1]] = obj.long_name
                    });

                    setAddressFormAutocomplete({
                        state: data.administrative_area_level_1,
                        city: data.administrative_area_level_3,
                        country: data.country,
                        lat: data.lat,
                        lng: data.lng,
                    })
                }
            })
        } catch (error) {
            console.error('+++ error', error);
        }
    }

    
    const googleMap = (latLng) => {
        function initMap(){
            new google.maps.Map(document.getElementById("map"), {
              center: latLng,
              zoom: 13,
            });
          }
        window.initMap = initMap();
    }

    return { predictions, latLng, AddressFormAutocomplete, getPlaceAutoComplete, getLatLng, getAddressFormAutocomplete, googleMap }
}

export default useGoogleMapServices