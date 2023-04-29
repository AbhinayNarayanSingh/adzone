import { useRouter } from "next/router";
import { useEffect } from "react";
import { isLoggedIn } from "./authHelper";
import { navigateToPage } from "@/utils/navigate/navigator";


export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    
    useEffect(() => {
      if (!isLoggedIn()) router.replace(navigateToPage("login"))
    }, []);

    if (isLoggedIn()) {
      return <Component {...props} />;
    }

    
    return null;
  };
}
