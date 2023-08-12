import React from 'react'
import Input from '../mainComponents/input/Input';

const SwitchToProfessional = () => {

  const switchToProfessionalFormFeild = [
    {
      label: "Logo",
      type: "image",
      placeholder: "Logo",
      errorMsg: "",
      name: "logo",
      // errorMsg: "Name is required",
    },
    {
      label: "Name",
      type: "text",
      placeholder: "Name",
      errorMsg: "",
      name: "name",
      errorMsg: "Name is required",
    },
    {
      label: "Description",
      type: "text",
      name: "description",
      placeholder: "Description",
      errorMsg: "Description is required",
    },
    {
      label: "Website",
      type: "text",
      placeholder: "Website",
      errorMsg: "",
      name: "website",
    },
    {
      label: "Email address",
      type: "email",
      name: "email",
      placeholder: "Email",
      errorMsg: "Email is required",
    },
    {
      label: "Contact",
      type: "text",
      placeholder: "Contact",
      errorMsg: "",
      name: "contact",
    },
    {
      type: "button",
      label: "Pay & Continue",
      className: "full-btn",
    },
  ];
  return (
    <div>
      <form>
        {switchToProfessionalFormFeild.map(feild => <Input  value="" formFeild={feild} key={feild.type + "_input_" + feild.name}/>)}
      </form>
    </div>
  )
}

export default SwitchToProfessional