import { redirectResetAct } from "@/store/slice/loaderSlice";
import { navigateToPage } from "@/utils/navigate/navigator";
import { useRouter } from "next/router"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

const Redirect = () => {
    const router = useRouter();
    const dispatch = useDispatch()

    const {redirectTo} = useSelector((state) => state.loader)
    let path = router.asPath
    
    useEffect(() => {
        if (redirectTo != "") {
            let destination = navigateToPage(redirectTo)
            if (destination != path) router.push(destination)
        }
    }, [redirectTo])

    useEffect(() => {
        if (redirectTo != "") dispatch(redirectResetAct())
    }, [router])


    return (<></>)
}

export default Redirect