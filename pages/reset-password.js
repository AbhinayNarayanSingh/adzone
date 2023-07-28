import React, { useState } from 'react'
import Input from '@/components/mainComponents/input/Input';
import UseAuth from '@/hooks/useAuth';



const verifyIdentityForm = [
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Email",
    errorMsg: "Email is required",
    helpText : "Please provide your registered email address"
  },
  {
    label: "Phone number",
    type: "phone",
    name: "phone",
    placeholder: "phone",
    errorMsg: "",
    helpText : "Please provide your registered phone number"
  },

  {
    type: "button",
    label: "Send OTP",
    className: "full-btn mt-1",
  },
];

const resetpasswordForm = [
  {
      label: "OTP",
      type: "text",
      errorMsg: "",
      name: "otp",
      helpText : "Please enter the OTP to verify your identity"
  },
  {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Password",
      helpText:
        "Please enter a secure password with at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character",
      errorMsg: "",
    },
    {
      label: "Confirm password",
      type: "password",
      name: "confirm-password",
      placeholder: "Re-enter Password",
      errorMsg: "",
      helpText: "Please re-enter your password to confirm it",
    },

  {
    type: "button",
    label: "Reset Password",
    className: "full-btn mt-1",
  },
];

const ResetPassword = () => {
    const [resetStep, setResetStep] = useState(1)

    const {body, formChangeHandler} = UseAuth()


  return (
      <div  className="auth-page-container align-center">
        {resetStep ? <div>
            <h2>Forgot Password</h2>
            <p  className="auth-subline">Please provide one of your information below. We will send you a OTP to verify your identity before you can reset your password.</p>

              <form className="sign-form">
                  {verifyIdentityForm.map((feild) => {
                      return (<Input 
                        formFeild={feild} 
                        key={"input__"+feild.type+"__"+feild.name} 
                        value={body}
                        changeHandler={formChangeHandler}
                        />)
                  })}
              </form>
        </div> :
        <div>
            <h2>Password Reset</h2>
            <p  className="auth-subline">An OTP has been sent. Please enter the OTP below, along with your new password, and confirm your new password to reset your password.</p>
            <form className="sign-form">
                {resetpasswordForm.map((feild) => {
                    return (<Input formFeild={feild} key={"input__"+feild.type+"__"+feild.name}/>)
                })}
            </form>
        </div>}
    </div>
  )
}

export default ResetPassword