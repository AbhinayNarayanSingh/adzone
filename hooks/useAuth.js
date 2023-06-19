import { useDispatch } from "react-redux";

import { quickSignInAct, signInAct } from "@/store/slice/authSlice";
import { useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const UseAuth = () => {
    const dispatch = useDispatch()
    const [body, setBody] = useState({
        email : "abhi",
        password : "123456"
    })
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
        console.log('+++ body', body);
        dispatch(signInAct(body))
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