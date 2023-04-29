import withoutAuth from "@/hoc/OAuth/withoutAuth";
import Form from "@/hoc/input/Form";
import router from "next/router";

import { loginAction } from "@/store/slice/auth";
import { useDispatch } from "react-redux";
import endpoints from "@/utils/services/endpoints";
import { services } from "@/utils/services/services";

const Login = () => {
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
  ];

  const dispatch = useDispatch()

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(loginAction("Abhinay Singh"))
    // router.push("/")

    const {data} = await services.get(endpoints.getProductsList, {})
    debugger

  }
  return (
    <div className="register-page-container center-min-height">
      <h2>Login to your account</h2>
      <p className="register-subline">
        To enhance your AdZone experience and help you stay safe and secure
      </p>

      <Form 
        className="sign-form" 
        formFeild={registerFormFeild} 
        submitHandler={loginSubmitHandler}
      />

      <p className="sign-option">
        Not registered yet?{" "}
        <button className="btn-link pl-05">Register Now</button>
      </p>

      <button className="social-login google">Continue with Google</button>
      <button className="social-login facebook">Continue with Facebook</button>
    </div>
  );
};

export default withoutAuth(Login);
