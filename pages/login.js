import Form from "@/hoc/input/Form";

const login = () => {
  const registerFormFeild = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Email",
      errorMsg: "Email is required",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Password",
      errorMsg: "",
    },
    {
      type: "button",
      label: "Login now",
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
      <h2>Login to your account</h2>
      <p className="register-subline">
        To enhance your AdZone experience and help you stay safe and secure
      </p>

      <Form formFeild={registerFormFeild} className="sign-form" />

      <p className="sign-option">
        Not registered yet?{" "}
        <button className="btn-link pl-05">Register Now</button>
      </p>

      <button className="social-login google">Continue with Google</button>
      <button className="social-login facebook">Continue with Facebook</button>
    </div>
  );
};

export default login;
