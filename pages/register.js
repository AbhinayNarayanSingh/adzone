import Form from "@/hoc/input/Form"

const register = () => {
    const registerFormFeild = [
        {
            label : "Name",
            type : "text",
            placeholder: "Name",
            errorMsg: "",
            name : "name",
            helpText: "Your name will be displayed on your public profile."
        },
        {
            label : "Email",
            type : "email",
            name : "email",
            placeholder: "Email",
            errorMsg: "Email is required"
        },
        {
            label : "Password",
            type : "password",
            name : "password",
            placeholder: "Password",
            errorMsg: ""
        },
        {
            label : "Confirm password",
            type : "password",
            placeholder: "Re-enter Password",
            errorMsg: ""
        },
        {
            type : "button",
            label : "Create account",
            className: "full-btn",
        },
        // {
        //     label : "",
        //     input : "",
        //     placeholder: "",
        //     errorMsg: ""
        // },
    ]
  return (
    <div className="register-page-container">
        <h2>Register</h2>
        <p className="register-subline">To enhance your AdZone experience and help you stay safe and secure</p>

        <Form formFeild={registerFormFeild} className="sign-form"/>

        <p className="sign-option">Already have an account? 
            <button className="btn-link">Login</button>
        </p>
    </div>
  )
}

export default register