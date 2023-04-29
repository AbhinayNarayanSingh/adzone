import { getCookieJS } from "@/utils/helper/session";

export const isLoggedIn = () => {
    return getCookieJS("isAuth");
}