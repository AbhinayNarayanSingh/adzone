import Input from '@/components/mainComponents/input/Input';
import React from 'react'

const AccountActivation = () => {

    const accountActivationForm = [
        {
          label: "Phone Number",
          type: "phone",
          name: "password",
          placeholder: "Password",
          errorMsg: "",
          helpText : "Provide the phone number associate with your account. "
        },
        {
          type: "button",
          label: "Send OTP",
          className: "full-btn",
        },
      ];

    const accountActivationVerifyForm = [
        {
            label: "OTP",
            type: "text",
            errorMsg: "",
            name: "otp",
            helpText : "Please enter the OTP to verify your identity"
        },
        {
            type: "button-group",
            button : [
                {
                    type: "button",
                    label: "Verify",
                    className: "full-btn",
                },
                {
                    type: "button",
                    label: "Resend OTP",
                    className: "btn-outline full-btn",
                },
            ]
        },
    ];

  return (
    <div className="auth-page-container align-center">
        <div className='w-100'>
            <h2>Account Activation</h2>
            <p className='auth-subline'>Securely Activate Your Account and Verify Your Information</p>


            {1 ? <form className="sign-form">
                  {accountActivationForm.map((feild) => {
                      return (<Input formFeild={feild} key={"input__"+feild.type+"__"+feild.name}/>)
                  })}
            </form> 
            :
            <form className="sign-form">
                {accountActivationVerifyForm.map((feild) => {
                    return (<Input formFeild={feild} key={"input__"+feild.type+"__"+feild.name}/>)
                })}
            </form>}
        </div>
    </div>
  )
}

export default AccountActivation