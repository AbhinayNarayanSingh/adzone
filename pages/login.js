import withoutAuth from "@/hoc/OAuth/withoutAuth";

import { useDispatch } from "react-redux";
import Link from "next/link";
import { navigateToPage } from "@/utils/navigate/navigator";
import { signInAct } from "@/store/slice/authSlice";
import Input from "@/components/mainComponents/input/Input";

const Login = () => {
  const loginFormFeild = [
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
      type: "static",
      jsx: <Link href={navigateToPage("resetPassword")}>
        <button className="btn-link">
          Forgot your password?
        </button>
      </Link>,
      className: "forgot-password",
    },
    {
      type: "button",
      label: "Login now",
      className: "full-btn",
    },
  ];

  const dispatch = useDispatch()

  const loginSubmitHandler = async (event) => {
    // event.preventDefault();
    dispatch(signInAct({
      "email" : "byron@schwabs.ca",
      "password" : "1234567890",
      "phone" : "8795675599"
  }))
    // router.push("/")

    // const {data} = await services.get(endpoints.getProductsList, {})
    // debugger

  }
  return (
    <div className="register-page-container">
      <h2>Login to your account</h2>
      <p className="register-subline">
        To enhance your AdZone experience and help you stay safe and secure
      </p>

      <form className="sign-form">
        {loginFormFeild.map((feild) => {
          return (<Input formFeild={feild} />)
        })}
      </form>

      <p className="sign-option">
        Not registered yet?{" "}
        <Link href={navigateToPage("register")}>
          <button className="btn-link pl-05">Register Now</button>
        </Link>
      </p>

      <div className="quick-signin-container">
        <button className="social-login" onClick={loginSubmitHandler}>Continue as The Schwab Family</button>
      </div>

      <button className="social-login google">Continue with Google</button>
      <button className="social-login facebook">Continue with Facebook</button>
    </div>
  );
};

export default withoutAuth(Login);
