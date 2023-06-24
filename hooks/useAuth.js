import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

import { emailValidator, passwordValidator, validationErrorMessage } from "@/utils/helper/inputValidatorHelper";

import { logoutHandlerAct, quickSignInAct, setQuickLoginUser, signInAct, signUpAct } from "@/store/slice/authSlice";
import { showToastAct } from "@/store/slice/toastSlice";

/**
 * UseAuth hook provides a convenient interface for authentication-related functionality
 */
const UseAuth = () => {
    const dispatch = useDispatch()
    const [body, setBody] = useState()
    const { quickLoginUser } = useSelector((state) => state.auth)

    useEffect(() => {
        if (window.location.pathname === "/register") {
            setBody({
                name : null,
                email : null,
                password : null,
                telegram_chat_id : null,
                confirm_password : null
            })
        } else if (window.location.pathname === "/login") {
            setBody({
                email : null,
                password : null,
            })
        }
    }, [])


    /**
     * function provides a convenient way to check the validity of a token and perform related actions. 
     * @param {string} type "reference_token" or "token"
     * @param {boolean} autoLogin true or false
     */
    const validateToken = async (type="reference_token", autoLogin=false) => {
        const token = Cookies.get(type)
        if (token) {
            const session = await jwtDecode(token)
            const expirationDate = new Date(session.exp * 1000); 
            const currentDate = new Date();
          
            if (expirationDate > currentDate && session?.Source === "AdZone") {
                dispatch(setQuickLoginUser({
                    email : session.Email,
                    reference_token : token
                }))

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
            if (!emailValidator(body.email || "")) {
                dispatch(showToastAct({message : validationErrorMessage.email}))
                return
            } else if (!passwordValidator(body.password || "")) {
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

    const registerSubmitHandler = async (event) => {
        event.preventDefault();

        let payload = JSON.parse(JSON.stringify(body));

        if (Object.keys(payload).length) {

            if (!emailValidator(payload.email)) {
                dispatch(showToastAct({message : validationErrorMessage.email}))
                // debugger
                return
            } else if (!passwordValidator(payload.password)) {
                dispatch(showToastAct({message : validationErrorMessage.password}))
                // debugger
                return
            } else 
            if (payload.password !== payload.confirm_password) {
                dispatch(showToastAct({message : validationErrorMessage.passwordConfirm}))
                debugger
                return
            } 
            else if (!payload.name || !payload?.name?.length) {
                dispatch(showToastAct({message : validationErrorMessage.name}))
                return
            }
            if (payload.email && payload.password && payload.name) {
                dispatch(signUpAct(payload))
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

    const passwordResetOTPHandler = () => {
        
    }

    const passwordResetOTPValidationHandler = () => {

    }


    return {body, quickLoginUser, formChangeHandler, loginSubmitHandler, registerSubmitHandler, quickLogin, validateToken, logoutHandler }
}

export default UseAuth