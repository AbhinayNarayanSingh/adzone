import React, { useEffect, useState } from 'react'

import Input from '../mainComponents/input/Input';
import useGoogleMapServices from '@/hooks/useGoogleMapServices';

const BillingAddress = () => {

  const [responseState, setResponseState] = useState({})
  const { predictions, AddressFormAutocomplete, getPlaceAutoComplete, getAddressFormAutocomplete } = useGoogleMapServices()

  const changeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    const prevState = { ...responseState };

    switch (type) {
      case "checkbox":
        prevState[name] = checked;
        break;
      default:
        prevState[name] = value;
        break;
    }

    if (name === "postalCode") getPlaceAutoComplete(responseState["postalCode"])   // on user postal code input it will show suggetions

    setResponseState(prevState);
  }

  useEffect(() => {
    const {state, city, country, lat, lng} = AddressFormAutocomplete 
    const prevState = { ...responseState, state, city, country, lat, lng };
    setResponseState(prevState);
  }, [AddressFormAutocomplete])
  
  const billingAddressFormFeild = [
    {
      label: "Name",
      type: "text",
      placeholder: "Name",
      errorMsg: "",
      name: "name",
    },
    {
      label: "Email address",
      type: "email",
      name: "email",
      placeholder: "Email",
      errorMsg: "Email is required",
    },
    {
      label: "Phone number",
      type: "text",
      placeholder: "Phone number",
      errorMsg: "",
      name: "phoneNumber",
    },
    {
      label: "Postal code",
      type: "selectSearch",
      placeholder: "Postal code",
      errorMsg: "",
      name: "postalCode",
      options : predictions,
      optionsFilterHandler : getAddressFormAutocomplete
    },
    {
      label: "Street address",
      type: "text",
      placeholder: "Street address",
      errorMsg: "",
      name: "streetAddress",
    },
    {
      label: "City",
      type: "text",
      placeholder: "City",
      errorMsg: "",
      name: "city",
    },
    {
      label: "State",
      type: "text",
      placeholder: "State",
      errorMsg: "",
      name: "state",
    },
    {
      label: "Country",
      type: "text",
      placeholder: "Country",
      errorMsg: "",
      name: "country",
    },
    {
      type: "button",
      label: "Save & Update",
      className: "full-btn",
    },
    // {
    //     label : "",
    //     input : "",
    //     placeholder: "",
    //     errorMsg: ""
    // },
  ];

  return (
    <div>

      {billingAddressFormFeild.map(feild => <Input 
        formFeild={feild} 
        key={feild.type + "_input_" + feild.name} 
        value={responseState[feild.name]}
        changeHandler={changeHandler} 
      />)}
    </div>
  )
}

export default BillingAddress