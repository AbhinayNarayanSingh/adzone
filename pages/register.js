import Form from "@/hoc/input/Form";

const register = () => {
  const registerFormFeild = [
    {
      label: "Name",
      type: "text",
      placeholder: "Name",
      errorMsg: "",
      name: "name",
      helpText: "Your name will be displayed on your public profile",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Email",
      errorMsg: "Email is required",
      helpText: "Please enter your email address",
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
      placeholder: "Re-enter Password",
      errorMsg: "",
      helpText: "Please re-enter your password to confirm it",
    },
    {
      type: "static",
      jsx: (
        <p className="t-and-c-string">
          By Submitting in you agree to T&C and Privacy Policy
        </p>
      ),
      className: "",
    },
    {
      type: "button",
      label: "Create account",
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
    <div className="register-page-container center-min-height">
      <h2>Create your free account</h2>
      <p className="register-subline">
        Register now to post, edit, and manage ads. It’s quick, easy, and free!
      </p>

      <Form formFeild={registerFormFeild} className="sign-form" />

      <p className="sign-option">
        Already have an account?
        <button className="btn-link pl-05">Login</button>
      </p>

      <button className="social-login google">Continue with Google</button>
      <button className="social-login facebook">Continue with Facebook</button>
    </div>
  );
};

export default register;
