import Link from "next/link";
import { signIn } from "next-auth/react";

import withoutAuth from "@/hoc/OAuth/withoutAuth";
import { navigateToPage } from "@/utils/navigate/navigator";
import Input from "@/components/mainComponents/input/Input";
import UseAuth from "@/hooks/useAuth";


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
      label: "Telegram Chat ID",
      type: "text",
      errorMsg: "",
      name: "telegram_chat_id",
      helpText: "Please enter your Telegram Chat ID",
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
      label: "Create account",
      className: "full-btn",
    },
  ];

  const {body, formChangeHandler} = UseAuth()

  return (
    <div className="auth-page-container">
      <h2>Create your free account</h2>
      <p className="auth-subline">
        Register now to post, edit, and manage ads. It’s quick, easy, and free!
      </p>

      <form className="sign-form" >
        {registerFormFeild.map((feild) => {
          return (<Input 
              formFeild={feild} 
              key={"input__"+feild?.type+"__"+feild?.name}
              changeHandler={formChangeHandler}
            />)
        })}
      </form>

      <p className="sign-option">
        Already have an account?
        <Link href={navigateToPage("login")}>
          <button className="btn-link pl-05">Login</button>
        </Link>
      </p>

      <button className="social-login google" type="button" onClick={() => signIn("google")}>Continue with Google</button>
      <button className="social-login facebook" type="button" onClick={() => signIn("facebook")}>Continue with Facebook</button>
    </div>
  );
};

// export default withoutAuth(register);
export default register;
