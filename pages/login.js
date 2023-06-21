import { useEffect } from "react";
import Link from "next/link";


import withoutAuth from "@/hoc/OAuth/withoutAuth";
import { navigateToPage } from "@/utils/navigate/navigator";
import Input from "@/components/mainComponents/input/Input";

// logic hooks
import UseAuth from "@/hooks/useAuth";


const Login = () => {
  const {body, quickLoginUser, quickLogin, loginSubmitHandler, formChangeHandler, validateToken} = UseAuth()

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
  
  useEffect(() => {
    validateToken()
  }, [])

  return (
    <div className="auth-page-container">
      <h2>Login to your account</h2>
      <p className="auth-subline">
        To enhance your AdZone experience and help you stay safe and secure
      </p>

      <form className="sign-form" onSubmit={loginSubmitHandler}>
        {loginFormFeild.map((feild) => {
          return (<Input 
              formFeild={feild} 
              key={"input__"+feild?.type+"__"+feild?.name}
              changeHandler={formChangeHandler}
              value={body}
            />)
        })}
      </form>

      <p className="sign-option">
        Not registered yet?{" "}
        <Link href={navigateToPage("register")}>
          <button className="btn-link pl-05">Register Now</button>
        </Link>
      </p>

      {quickLoginUser?.email && <div className="quick-signin-container">
        <button className="social-login" onClick={quickLogin}>Continue as {quickLoginUser?.email}</button>
      </div>}

      {/* <button className="social-login google">Continue with Google</button>
      <button className="social-login facebook">Continue with Facebook</button> */}
    </div>
  );
};

export default withoutAuth(Login);
