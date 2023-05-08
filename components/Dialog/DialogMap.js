import dynamic from "next/dynamic";

const SuccessDialog = dynamic(() => import("./Dialogs/SuccessDialog"), {ssr : false});
const ErrorDialog = dynamic(() => import("./Dialogs/ErrorDialog"), {ssr : false});
const ChangeLocationDialog = dynamic(() => import("./Dialogs/ChangeLocationDialog"));


export const DialogMapFn = (key) => {

    const dialog = {
        SUCCESS_DIALOG : <SuccessDialog/>,
        ERROR_DIALOG : <ErrorDialog/>,
        CHANGE_LOCATION_DIALOG : <ChangeLocationDialog/>,
    }

    return dialog[key]
}