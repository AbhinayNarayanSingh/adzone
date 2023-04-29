
import { useRouter } from "next/router";
import { useEffect } from "react";
import { isLoggedIn } from "./authHelper";

export default function withoutAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      if (isLoggedIn()) router.replace("/")
    }, []);

    if (!isLoggedIn()) {
      return <Component {...props} />;
    }

    return null;
  };
}
