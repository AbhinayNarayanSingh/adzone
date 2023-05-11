import Input from '@/componentWrapper/input/Input';
import React from 'react'

const PersonalDetails = () => {
  const personalDetailsFormFeild = [
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
      label: "Country",
      type: "text",
      placeholder: "Country",
      errorMsg: "",
      name: "country",
    },
    {
      label: "Zip",
      type: "text",
      placeholder: "pincode",
      errorMsg: "",
      name: "pincode",
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
      label: "Address",
      type: "text",
      placeholder: "Address",
      errorMsg: "",
      name: "address",
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
      {personalDetailsFormFeild.map(feild => <Input formFeild={feild} key={feild.type + "_input_" + feild.name}/>)}
    </div>
  )
}

export default PersonalDetails