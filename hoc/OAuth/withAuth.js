import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

import { navigateToPage } from "@/utils/navigate/navigator";


export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {

    const router = useRouter();
    console.log('+++ router', router);
    const navigateToLoginPage = () => router.push(navigateToPage("login") + "?next="+ router.asPath)

    const isAuth = useSelector((state) => state.auth.isAuth);
    const token = Cookies.get('token');

    useEffect(() => {
      if (!isAuth || !token) {
        navigateToLoginPage()
        return
      }
    }, [isAuth, token])

    if (isAuth && token) {
      const {exp} = jwtDecode(token)

      const expirationDate = new Date(exp * 1000); 
      const currentDate = new Date();
    
      // Compare the expiration date with the current date and return when token is valid
      if (expirationDate > currentDate) {
        return <Component {...props} />;
      }
    }
    
    return null;
  };
}
