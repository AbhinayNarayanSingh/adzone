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
      type: "button",
      label: "Save & Update",
      className: "full-btn",
    },
  ];
  const passwordUpdatedFormFeild = [
    {
      label: "Old password",
      type: "password",
      name : "password",
      placeholder: "",
      errorMsg: ""
    },
    {
      label: "New password",
      type: "password",
      name : "new-password",
      placeholder: "",
      errorMsg: ""
    },
    {
      label: "Confirm password",
      type: "password",
      name : "confirm-password",
      placeholder: "",
      errorMsg: ""
    },
    {
      type: "button",
      label: "Update password",
      className: "full-btn",
    },
  ]

  return (
    <div>
      <form>
        {personalDetailsFormFeild.map(feild => <Input value="" formFeild={feild} key={feild.type + "_input_" + feild.name}/>)}
      </form>
      <form className='mt-2'>
        {passwordUpdatedFormFeild.map(feild => <Input value="" formFeild={feild} key={feild.type + "_input_" + feild.name}/>)}
      </form>
    </div>
  )
}

export default PersonalDetails