import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

import { emailValidator, passwordValidator, validationErrorMessage } from "@/utils/helper/inputValidatorHelper";

import { logoutHandlerAct, quickSignInAct, signInAct } from "@/store/slice/authSlice";
import { showToastAct } from "@/store/slice/toastSlice";
import { navigateToPage } from "@/utils/navigate/navigator";

const UseAuth = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [body, setBody] = useState({})
    const [quickLoginUser, setQuickLoginUser] = useState({})
    const [validationError, setValidationError] = useState(null)

    const validateToken = async (type="reference_token", autoLogin=false) => {
        const token = Cookies.get(type)
        if (token) {
            const session = await jwtDecode(token)
            const expirationDate = new Date(session.exp * 1000); 
            const currentDate = new Date();
          
            if (expirationDate > currentDate && session?.Source === "AdZone") {
                setQuickLoginUser({
                    email : session.Email,
                    reference_token : token
                })
                if (autoLogin) {
                    dispatch(quickSignInAct({
                        "reference_token": token
                    }))
                }
                return true
            } else {
                Cookies.remove(type)
                return false
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
            if (!emailValidator(body.email)) {
                dispatch(showToastAct({message : validationErrorMessage.email}))
                return
            } else if (!passwordValidator(body.password)) {
                dispatch(showToastAct({message : validationErrorMessage.password}))
                return
            }
            if (body.email && body.password) {
                dispatch(signInAct(body))
            }
            
        } else {
            dispatch(showToastAct({message : validationErrorMessage.enterEmailPassword}))
        }
    }

    const quickLogin = () => {
        if (quickLoginUser?.reference_token) {
            dispatch(quickSignInAct({
                "reference_token": quickLoginUser.reference_token
            }))
        }
    }

    const logoutHandler = () => {
        dispatch(logoutHandlerAct())
        // router.push(navigateToPage("login"))
    }

    return {body, quickLoginUser, validationError, formChangeHandler, loginSubmitHandler, quickLogin, validateToken, logoutHandler }
}

export default UseAuth