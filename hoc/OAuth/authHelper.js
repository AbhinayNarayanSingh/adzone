import getGlobalState from "@/hooks/getGlobalState";

export const isLoggedIn = () => {
    const {isAuth} = getGlobalState("auth")
    return isAuth;
}