import { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

import { emailValidator, passwordValidator } from "@/utils/helper/inputValidatorHelper";

import { quickSignInAct, signInAct } from "@/store/slice/authSlice";
import { showToastAct } from "@/store/slice/toastSlice";

const UseAuth = () => {
    const dispatch = useDispatch()
    const [body, setBody] = useState({})
    const [quickLoginUser, setQuickLoginUser] = useState({})
    const [validationError, setValidationError] = useState(null)


    const checkForQuickLoginFn = async () => {
        const referenceToken = Cookies.get("reference_token")

        if (referenceToken) {
            const token = await jwtDecode(referenceToken)
            const expirationDate = new Date(token.exp * 1000); 
            const currentDate = new Date();
          
            if (expirationDate > currentDate) {
                setQuickLoginUser({
                    email : token.Email,
                    reference_token : referenceToken
                })
            }
        }
    }

    const formChangeHandler = (e) => {
        const { name, value, checked, type } = e.target;
        const temp = {...body}
        temp[name] = value
        setBody(temp)
    }

    const loginSubmitHandler = async (event) => {
        event.preventDefault();

        
        if (Object.keys(body).length) {
            // if (emailValidator(body.email)) {
            //     console.log('+++ valid');
            // } else if (passwordValidator(body.passowrd)) {
            //     console.log('+++ valid password');
            // }
            
            if (body.email && body.password) {
                dispatch(signInAct(body))
            }
            
        } else {
            dispatch(showToastAct({message : "Please enter your email and password to proceed."}))
        }
    }

    const quickLogin = () => {
        if (quickLoginUser?.reference_token) {
            dispatch(quickSignInAct({
                "reference_token": quickLoginUser.reference_token
            }))
        }
    }

    return {body, quickLoginUser, validationError, formChangeHandler, loginSubmitHandler, quickLogin, checkForQuickLoginFn }
}

export default UseAuth