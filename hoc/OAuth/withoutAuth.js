import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

import { navigateToPage } from "@/utils/navigate/navigator";

export default function withoutAuth(Component) {
  return function UnauthenticatedComponent(props) {
    const router = useRouter();
    const navigateToDashboard = () => router.push(navigateToPage("dashboard"));

    const isAuth = useSelector((state) => state.auth.isAuth);
    const token = Cookies.get("token");

    useEffect(() => {
      if (isAuth && token) {
        navigateToDashboard();
      }
    }, [isAuth, token]);

    return <Component {...props} />;
  };
}
